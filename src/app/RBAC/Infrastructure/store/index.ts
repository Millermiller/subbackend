import { Module } from 'vuex-smart-module';
import RBACState from '@/app/RBAC/Infrastructure/store/state'
import RBACMutations from '@/app/RBAC/Infrastructure/store/mutations'
import RBACGetters from '@/app/RBAC/Infrastructure/store/getters'
import RBACActions from '@/app/RBAC/Infrastructure/store/actions'

export const rbacModule = new Module({
  namespaced: false,
  state: RBACState,
  getters: RBACGetters,
  mutations: RBACMutations,
  actions: RBACActions,
})
