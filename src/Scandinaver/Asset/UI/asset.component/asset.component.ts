import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
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
    this.$eventHub.$emit('setCardsLoading', true)
    await this.service.getAsset(id)
    this.$eventHub.$emit('setCardsLoading')
  }

  async forvo(asset: Asset) {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(this.$tc('forvoConfirm'))) {
      this.loaded = true
      const result = await this.service.forvoAction(asset)
      this.loaded = false
      this.$buefy.snackbar.open(
        this.$t('forvoComplete', {
          count: result.count,
          all: result.all,
        }).toString(),
      )
    }
  }

  get activeAssetId(): number {
    const asset: Asset | never = this.$store.getters.getActiveAsset
    // console.log(asset)
    return 0
  }
}
