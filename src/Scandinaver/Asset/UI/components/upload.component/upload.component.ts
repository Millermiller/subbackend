import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'

@Component({
  components: {},
})
export default class UploadComponent extends Vue {
  @Inject()
  private readonly cardService: CardService
  private fileUploadFormData: FormData = new FormData()
  public orig: string = ''
  public translate: string = ''
  private isSentence: any = '0'

  get switchStat(): string {
    return this.isSentence === '1' ? this.$tc('sentence') : this.$tc('word')
  }

  public bindFile(e: any): void {
    e.preventDefault()
    this.fileUploadFormData.append('file', e.target.files[0])
  }

  public async upload(): Promise<void> {
    await this.cardService.uploadWordFile(this.fileUploadFormData)
  }

  public async add(): Promise<void> {
    await this.cardService.addAdminCard({
      word: this.orig,
      translate: this.translate,
      isSentence: this.isSentence,
    })
    this.orig = ''
    this.translate = ''
  }
}
