import { Component, Prop, Vue } from 'vue-property-decorator'
import assetAPI from '@/api/assetAPI'
import forvoAPI from '@/api/forvoAPI'

@Component({
  components: {},
})
export default class AssetComponent extends Vue {
  @Prop({ required: true })
  private item!: any
  private loaded: boolean = false

  load(id: number) {
    this.loaded = true
    assetAPI.getAsset(id).then(
      (response) => {
        if (response.status === 200) {
          this.loaded = false
          this.$store.commit('setActiveAsset', response.data)
        } else {
          this.$buefy.snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  forvo(id: number) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(this.$tc('forvoConfirm'))) {
      this.loaded = true
      forvoAPI.getAudio(id).then(
        (response) => {
          if (response.data.success) {
            this.loaded = false
            this.$buefy.snackbar.open(this.$t('forvoComplete', {count: response.data.count, all: response.data.all}).toString())
          } else {
            this.$buefy.snackbar.open(this.$tc('error'))
          }
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }

  get activeAssetId() {
    return this.$store.getters.activeAssetId
  }
}
