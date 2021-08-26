import { Getters } from 'vuex-smart-module'
import DashboardState from '@/Scandinaver/Dashboard/Infrastructure/store/state'

export default class DashboardGetters extends Getters<DashboardState> {
  get wordsCount(): number {
    return this.state.wordsCount
  }

  get assetsCount(): number {
    return this.state.assetsCount
  }

  get audioCount(): number {
    return this.state.audioCount
  }

  get usersCount(): number {
    return this.state.usersCount
  }

  get textsCount(): number {
    return this.state.textsCount
  }
}
