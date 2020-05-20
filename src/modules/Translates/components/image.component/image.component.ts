import { Component, Prop, Vue } from 'vue-property-decorator'
import textAPI from '@/api/textAPI'

@Component({
  components: {},
})
export default class ImageComponent extends Vue {
  @Prop({ required: true })
  private item!: any

  private imageSrc: string = ''
  private fileUploadFormData: FormData = new FormData()

  previewThumbnail(event: any) {
    const input = event.target

    if (input.files && input.files[0]) {
      const reader = new FileReader()
      this.fileUploadFormData.append('file', input.files[0])
      const vm = this

      reader.onload = function(e: any) {
        vm.item.image = e.target.result
      }

      reader.readAsDataURL(input.files[0])
    }
  }

  upload() {
    textAPI.saveImage(this.item.id, this.fileUploadFormData).then(
      (response) => {
        if (response.data.success) {
          this.$buefy.snackbar.open('Обновлено!')
        } else {
          this.$buefy.snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        this.$buefy.snackbar.open(this.$tc('error'))
      },
    )
  }
}
