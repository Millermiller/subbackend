import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import TextService from '@/app/Translate/Application/text.service'
import { Translate } from '@/app/Translate/Domain/Translate'

@Component({
  components: {},
})
export default class ImageComponent extends Vue {
  @Prop({ required: true })
  public item: Translate

  @Inject()
  private readonly service: TextService

  private fileUploadFormData: FormData = new FormData()

  public previewThumbnail(event: any): void {
    const input = event.target

    if (input.files && input.files[0]) {
      const reader = new FileReader()
      this.fileUploadFormData.append('file', input.files[0])
      const vm = this

      reader.onload = function (e: any) {
        vm.item.image = e.target.result
      }

      reader.readAsDataURL(input.files[0])
    }
  }

  public async upload(): Promise<void> {
    await this.service.saveImage(this.item, this.fileUploadFormData)
    this.$buefy.snackbar.open(this.$tc('updated'))
  }
}
