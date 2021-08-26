import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { permissions } from '@/permissions/permission.type'
import { LOAD_ASSET } from '@/events/events.type'

@Component({
  components: {},
})
export default class AssetComponent extends Vue {
  @Inject()
  private readonly service: AssetService

  @Prop({ required: true })
  public item!: Asset

  @Prop()
  public selected: boolean

  public loaded: boolean = false
  public permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  public async load(): Promise<void> {
    this.$eventHub.$emit(LOAD_ASSET, this.item)
  }

  public async forvo(asset: Asset): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('forvoConfirm'),
      onConfirm: async () => {
        this.loaded = true
        const result = await this.service.forvoAction(asset)
        this.loaded = false
        this.$buefy.snackbar.open(
          this.$t('forvoComplete', {
            count: result.count,
            all: result.all,
          }).toString(),
        )
      },
    })
  }
}
