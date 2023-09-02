import { Actions } from 'vuex-smart-module'
import DashboardState from '@/app/Dashboard/Infrastructure/store/state'
import DashboardGetters from '@/app/Dashboard/Infrastructure/store/getters'
import DashboardMutations from '@/app/Dashboard/Infrastructure/store/mutations'

export default class DashboardActions extends Actions<DashboardState, DashboardGetters, DashboardMutations, DashboardActions> {
  public setDashboard(data: any): void {
    this.commit('setWordsCount', data.words.count)
    this.commit('setAssetsCount', data.assets.count)
    this.commit('setAudioCount', data.audio)
    this.commit('setUsersCount', data.users.length)
    this.commit('setTextsCount', data.texts.count)
  }
}
