import { Module } from 'vuex-smart-module'
import TextMutations from '@/app/Translate/Infrastructure/store/mutations'
import TextGetters from '@/app/Translate/Infrastructure/store/getters'
import State from '@/app/Translate/Infrastructure/store/state'

export const textModule = new Module({
  namespaced: false,
  state: State,
  getters: TextGetters,
  mutations: TextMutations,
})
