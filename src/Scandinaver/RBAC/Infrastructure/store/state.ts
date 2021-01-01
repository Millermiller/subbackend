import Role from '@/Scandinaver/RBAC/Domain/Role'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { Ability } from '@casl/ability'

export default class RBACState {
  roles: Role[] = []
  permissions: Permission[] = []
  ability: Ability = new Ability()
}
