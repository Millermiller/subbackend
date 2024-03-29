import { Getters } from 'vuex-smart-module'
import AppState from '@/app/Core/Infrastructure/store/app/state'

export default class AppGetters extends Getters<AppState> {
  get pkg() {
    return this.state.pkg
  }

  get app() {
    return this.state.app
  }

  get device() {
    return this.state.device
  }

  get sidebar() {
    return this.state.sidebar
  }
}
