import { Getters } from 'vuex-smart-module'
import DashboardState from '@/Scandinaver/Dashboard/Infrastructure/store/state'

export default class DashboardGetters extends Getters<DashboardState> {

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
