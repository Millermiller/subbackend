import { Actions } from 'vuex-smart-module'
import RBACState from '@/app/RBAC/Infrastructure/store/state'
import RBACGetters from '@/app/RBAC/Infrastructure/store/getters'
import RBACMutations from '@/app/RBAC/Infrastructure/store/mutations'
import { User } from '@/app/Core/Domain/User'

export default class RBACActions extends Actions<RBACState, RBACGetters, RBACMutations, RBACActions> {
  public initialiseRBAC(data: User): void {
    if (data.permissionList) {
      this.commit('setPermissions', data.permissionList)

      const payload = data.permissionList.map(item => ({
        action: item,
        subject: 'all',
      }))

      this.commit('clearAbility')
      this.commit('updateAbility', payload)
    }
  }
}
