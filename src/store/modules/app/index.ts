import { Module } from 'vuex-smart-module';
import AppState from '@/store/modules/app/state';
import AppMutations from '@/store/modules/app/mutations';
import AppActions from '@/store/modules/app/actions'
import AppGetters from '@/store/modules/app/getters'

export default new Module({
  namespaced: false,
  state: AppState,
  getters: AppGetters,
  mutations: AppMutations,
  actions: AppActions,
})
