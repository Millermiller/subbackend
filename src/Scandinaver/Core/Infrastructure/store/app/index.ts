import { Module } from 'vuex-smart-module';
import AppState from '@/Scandinaver/Core/Infrastructure/store/app/state';
import AppMutations from '@/Scandinaver/Core/Infrastructure/store/app/mutations';
import AppActions from '@/Scandinaver/Core/Infrastructure/store/app/actions'
import AppGetters from '@/Scandinaver/Core/Infrastructure/store/app/getters'

export default new Module({
  namespaced: false,
  state: AppState,
  getters: AppGetters,
  mutations: AppMutations,
  actions: AppActions,
})
