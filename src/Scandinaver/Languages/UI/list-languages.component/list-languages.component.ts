import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import LanguageService from '@/Scandinaver/Languages/Application/language.service'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { LanguageForm } from '@/Scandinaver/Languages/Domain/LanguageForm'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListLanguagesComponent extends CRUDComponent<Language, LanguageForm> {
  @Inject()
  protected readonly service: LanguageService

  private fileUploadFormData: FormData = new FormData()

  protected modalTitleCreate = this.$root.$tc('createLanguage')
  protected modalTitleUpdate = this.$root.$tc('updateLanguage')

  protected buildForm(): LanguageForm {
    return new LanguageForm()
  }

  public edit(language: Language): void {
    this.edited = language.toDTO()
    this.modalTitle = this.modalTitleUpdate
    this.isModalFormActive = true
  }

  public async save(): Promise<void> {
    this.loadingModal = true
    this.fileUploadFormData.append('title', this.edited.title)
    this.fileUploadFormData.append('letter', this.edited.letter)
    this.fileUploadFormData.append('description', this.edited.description)
    if (this.edited.id) {
      const language = this.service.fromDTO(this.edited)
      await this.service.update(language, this.fileUploadFormData)
    } else {
      await this.service.create(this.fileUploadFormData)
    }
    this.fileUploadFormData = new FormData()
    await this.load()
    this.loadingModal = false
    this.closeModalForm()
  }

  public showModalForm(): void {
    this.edited = {
      description: '',
      image: undefined,
      id: null,
      title: '',
      letter: '',
      flag: ''
    };
    if (this.modalTitle === '') {
      this.modalTitle = this.modalTitleCreate
    }
    this.fileUploadFormData = new FormData()
    this.isModalFormActive = true
  }

  public bindFlag(e: any): void {
    this.fileUploadFormData.append('file', e)
    this.edited.flag = URL.createObjectURL(e)
  }

  public bindImage(e: any): void {
    this.fileUploadFormData.append('image', e)
    this.edited.image = URL.createObjectURL(e)
  }
}
