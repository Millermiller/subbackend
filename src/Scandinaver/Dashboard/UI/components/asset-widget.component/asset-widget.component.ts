import { Component } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import BaseWidgetComponent from '@/Scandinaver/Core/UI/BaseWidgetComponent'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'

@Component({
  components: {},
})
export default class AssetWidgetComponent extends BaseWidgetComponent<Asset> {
  @Inject()
  protected service: AssetService
  protected title: string = this.$root.$tc('assets')
  protected watchLanguage: boolean = true;
}
