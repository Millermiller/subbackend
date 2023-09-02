import { Module } from 'vuex-smart-module'
import State from '@/app/Asset/Infrastructure/store/test/state'
import TestGetters from '@/app/Asset/Infrastructure/store/test/getters'
import TestActions from '@/app/Asset/Infrastructure/store/test/actions'
import TestMutations from '@/app/Asset/Infrastructure/store/test/mutations'

export const testModule = new Module({
  namespaced: false,
  state: State,
  getters: TestGetters,
  mutations: TestMutations,
  actions: TestActions,
})
