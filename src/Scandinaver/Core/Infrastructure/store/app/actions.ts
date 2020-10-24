import { Actions } from 'vuex-smart-module'
import AppState from '@/Scandinaver/Core/Infrastructure/store/app/state'
import AppGetters from '@/Scandinaver/Core/Infrastructure/store/app/getters'
import AppMutations from '@/Scandinaver/Core/Infrastructure/store/app/mutations'

export default class AppActions extends Actions<AppState, AppGetters, AppMutations, AppActions> {

}
