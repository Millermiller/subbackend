import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'

@Component({
  components: {},
})
export default class AssetComponent extends Vue {

  @Inject()
  private service: AssetService

  @Prop({ required: true })
  private item!: Asset
  private loaded: boolean = false

  async load(id: number) {
    this.loaded = true
    const asset = await this.service.getAsset(id)
    this.$store.commit('setActiveAsset', asset)
    this.loaded = false
  }

  async forvo(asset: Asset) {
    if (confirm(this.$tc('forvoConfirm'))) {
      this.loaded = true
      const result = await this.service.forvoAction(asset)
      this.loaded = false
      this.$buefy.snackbar.open(this.$t('forvoComplete', {
        count: result.count,
        all: result.all
      }).toString())
    }
  }

  get activeAssetId() {
    return this.$store.getters.activeAssetId
  }
}
