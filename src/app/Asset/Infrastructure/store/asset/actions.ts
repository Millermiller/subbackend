import { Actions } from 'vuex-smart-module'
import State from '@/app/Asset/Infrastructure/store/asset/state'
import AssetGetters from '@/app/Asset/Infrastructure/store/asset/getters'
import AssetMutations from '@/app/Asset/Infrastructure/store/asset/mutations'

export default class AssetActions extends Actions<
  State,
  AssetGetters,
  AssetMutations,
  AssetActions
> {

}
