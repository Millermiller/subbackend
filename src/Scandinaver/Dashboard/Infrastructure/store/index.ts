import { Module } from 'vuex-smart-module';
import DashboardState from '@/Scandinaver/Dashboard/Infrastructure/store/state'
import DashboardMutations from '@/Scandinaver/Dashboard/Infrastructure/store/mutations'
import DashboardGetters from '@/Scandinaver/Dashboard/Infrastructure/store/getters'
import DashboardActions from '@/Scandinaver/Dashboard/Infrastructure/store/actions'

export const dashboardModule = new Module({
  namespaced: false,
  state: DashboardState,
  getters: DashboardGetters,
  mutations: DashboardMutations,
  actions: DashboardActions,
})
