
import {Component, Vue} from "vue-property-decorator";
import fileAPI from '@/api/fileAPI'
import assetAPI from '@/api/assetAPI'

@Component({
  components: {}
})
export default class UploadComponent extends Vue {
  fileUploadFormData: FormData = new FormData()
  orig: string = ''
  translate: string = ''
  issentence: boolean = false

  bindFile(e: any) {
    e.preventDefault()
    this.fileUploadFormData.append('file', e.target.files[0])
  }

  upload() {
    fileAPI.uploadWordfile(this.fileUploadFormData).then(
      (response) => {
        if (response.data.success) {
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  add() {
    assetAPI
      .addAdminCard({ word: this.orig, translate: this.translate, issentence: this.issentence })
      .then(
        (response) => {
          if (response.data.success) {
            this.orig = this.translate = ''
          }
        },
        (response) => {
          console.log(response)
        },
      )
  }

  get switchStat() {
    return this.issentence ? this.$tc('sentence') : this.$tc('word')
  }
}

