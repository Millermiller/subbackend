import { Module } from 'vuex-smart-module';
import DashboardState from '@/app/Dashboard/Infrastructure/store/state'
import DashboardMutations from '@/app/Dashboard/Infrastructure/store/mutations'
import DashboardGetters from '@/app/Dashboard/Infrastructure/store/getters'
import DashboardActions from '@/app/Dashboard/Infrastructure/store/actions'

export const dashboardModule = new Module({
  namespaced: false,
  state: DashboardState,
  getters: DashboardGetters,
  mutations: DashboardMutations,
  actions: DashboardActions,
})
