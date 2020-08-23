import { Mutations } from 'vuex-smart-module';
import DashboardState from '@/Scandinaver/Dashboard/Infrastructure/store/state'

export default class DashboardMutations extends Mutations<DashboardState> {
  setWordsCount(data: number) {
    this.state.wordsCount = data
  }

  setAssetsCount(data: number) {
    this.state.assetsCount = data
  }

  setAudioCount(data: number) {
    this.state.audioCount = data
  }

  setUsersCount(data: number) {
    this.state.usersCount = data
  }

  setTextsCount(data: number) {
    this.state.textsCount = data
  }
}
