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
  private service: LanguageService

  private languages: Language[] = []
  private preview: any = null
  private loading: boolean = false
  private isComponentModalActive: boolean = false
  public fileUploadFormData: FormData = new FormData()
  private edited: LanguageForm = {
    id: null,
    title: '',
    letter: '',
    flag: '',
  }
  permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.languages = await this.service.getAll()
    this.loading = false
  }

  edit(language: Language) {
    this.edited = language.toDTO()
    this.preview = this.edited.flag
    this.isComponentModalActive = true
  }

  async create() {
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

  showCreateModal() {
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

  closeCreateModal() {
    this.edited = {
      id: null,
      title: '',
      letter: '',
      flag: '',
    };
    this.isComponentModalActive = false
  }

  async remove(language: Language) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(language)
        this.$buefy.snackbar.open(this.$tc('removed'))
        await this.load()
      },
    })
  }

  bindFile(e: any) {
    this.fileUploadFormData.append('file', e)
    this.preview = URL.createObjectURL(e)
  }
}
