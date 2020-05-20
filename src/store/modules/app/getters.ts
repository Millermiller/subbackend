import { Getters } from 'vuex-smart-module'
import AppState from '@/store/modules/app/state'

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

  get effect() {
    return this.state.effect
  }

  get wordsCount() {
    return this.state.wordsCount
  }

  get assetsCount() {
    return this.state.assetsCount
  }

  get audioCount() {
    return this.state.audioCount
  }

  get usersCount() {
    return this.state.usersCount
  }

  get textsCount() {
    return this.state.textsCount
  }
}
