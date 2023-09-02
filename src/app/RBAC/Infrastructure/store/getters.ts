import { Getters } from 'vuex-smart-module'
import RBACState from '@/app/RBAC/Infrastructure/store/state'
import Role from '@/app/RBAC/Domain/Role'
import Permission from '@/app/RBAC/Domain/Permission'
import { Ability } from '@casl/ability'

export default class RBACGetters extends Getters<RBACState> {
  get roles(): Role[] {
    return this.state.roles
  }

  get permissions(): string[] {
    return this.state.permissions
  }

  get ability(): Ability {
    return this.state.ability
  }
}
