import { Actions } from 'vuex-smart-module'
import AppState from '@/app/Core/Infrastructure/store/app/state'
import AppGetters from '@/app/Core/Infrastructure/store/app/getters'
import AppMutations from '@/app/Core/Infrastructure/store/app/mutations'

export default class AppActions extends Actions<AppState, AppGetters, AppMutations, AppActions> {

}
