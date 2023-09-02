import { Module } from 'vuex-smart-module'
import State from '@/app/Core/Infrastructure/store/user/state'
import UserGetters from '@/app/Core/Infrastructure/store/user/getters'
import UserMutations from '@/app/Core/Infrastructure/store/user/mutations'
import UserActions from '@/app/Core/Infrastructure/store/user/actions'

export const userModule = new Module({
  namespaced: false,
  state: State,
  getters: UserGetters,
  mutations: UserMutations,
  actions: UserActions,
})
