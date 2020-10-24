import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'

@Component({
  components: {},
})
export default class UploadComponent extends Vue {
  @Inject()
  private cardService: CardService

  fileUploadFormData: FormData = new FormData()
  orig: string = ''
  translate: string = ''
  issentence: boolean = false

  bindFile(e: any) {
    e.preventDefault()
    this.fileUploadFormData.append('file', e.target.files[0])
  }

  async upload() {
    await this.cardService.uploadWordFile(this.fileUploadFormData)
  }

  async add() {
    await this.cardService.addAdminCard({
      word: this.orig,
      translate: this.translate,
      issentence: this.issentence,
    })
    this.orig = ''
    this.translate = ''
  }

  get switchStat() {
    return this.issentence ? this.$tc('sentence') : this.$tc('word')
  }
}
