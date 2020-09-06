import { Getters } from 'vuex-smart-module'
import State from '@/Scandinaver/Asset/Infrastructure/store/asset/state'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Card } from '@/Scandinaver/Asset/Domain/Card'

export default class AssetGetters extends Getters<State> {
  get activeAssets(): Asset|null {
    return this.state.activeAsset
  }

  get cards(): Card[]|null {
    if (this.state.activeAsset === null) {
      return null
    }
    return this.state.activeAsset.cards
  }
}
