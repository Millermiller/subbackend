import { Actions } from 'vuex-smart-module'
import DashboardState from '@/Scandinaver/Dashboard/Infrastructure/store/state'
import DashboardGetters from '@/Scandinaver/Dashboard/Infrastructure/store/getters'
import DashboardMutations from '@/Scandinaver/Dashboard/Infrastructure/store/mutations'

export default class DashboardActions extends Actions<DashboardState, DashboardGetters, DashboardMutations, DashboardActions> {
  setDashboard(data: any) {
    this.commit('setWordsCount', data.words.count)
    this.commit('setAssetsCount', data.assets.count)
    this.commit('setAudioCount', data.audio)
    this.commit('setUsersCount', data.users.length)
    this.commit('setTextsCount', data.texts.count)
  }
}
