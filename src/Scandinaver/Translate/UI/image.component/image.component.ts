import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'

@Component({
  components: {},
})
export default class ImageComponent extends Vue {
  @Prop({ required: true })
  private item!: Translate

  @Inject()
  private service: TextService

  private imageSrc: string = ''
  private fileUploadFormData: FormData = new FormData()

  previewThumbnail(event: any) {
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

  async upload() {
    await this.service.saveImage(this.item, this.fileUploadFormData)
    this.$buefy.snackbar.open(this.$tc('updated'))
  }
}
