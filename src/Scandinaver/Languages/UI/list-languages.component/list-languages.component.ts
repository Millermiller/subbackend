import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import { permissions } from '@/permissions/permission.type'
import LanguageService from '@/Scandinaver/Languages/Application/language.service'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { LanguageForm } from '@/Scandinaver/Languages/Domain/LanguageForm'

@Component({
  components: {},
})
export default class ListLanguagesComponent extends Vue {
  @Inject()
  private readonly service: LanguageService

  public languages: Language[] = []
  public preview: any = null
  public loading: boolean = false
  public isComponentModalActive: boolean = false
  private fileUploadFormData: FormData = new FormData()
  public edited: LanguageForm = {
    id: null,
    title: '',
    letter: '',
    flag: '',
  }
  public permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.languages = await this.service.getAll()
    this.loading = false
  }

  public edit(language: Language): void {
    this.edited = language.toDTO()
    this.preview = this.edited.flag
    this.isComponentModalActive = true
  }

  public async create(): Promise<void> {
    this.fileUploadFormData.append('title', this.edited.title)
    this.fileUploadFormData.append('letter', this.edited.letter)
    if (this.edited.id) {
      const language = Language.fromDTO(this.edited)
      await this.service.update(language, this.fileUploadFormData)
    } else {
      await this.service.create(this.fileUploadFormData)
    }
    this.fileUploadFormData = new FormData()
    await this.load()
    this.closeCreateModal()
  }

  public showCreateModal(): void {
    this.edited = {
      id: null,
      title: '',
      letter: '',
      flag: '',
    };
    this.fileUploadFormData = new FormData()
    this.preview = null
    this.isComponentModalActive = true
  }

  public closeCreateModal(): void {
    this.edited = {
      id: null,
      title: '',
      letter: '',
      flag: '',
    };
    this.isComponentModalActive = false
  }

  public async remove(language: Language): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(language)
        this.$buefy.snackbar.open(this.$tc('removed'))
        await this.load()
      },
    })
  }

  public bindFile(e: any): void {
    this.fileUploadFormData.append('file', e)
    this.preview = URL.createObjectURL(e)
  }
}
