import Role from '@/app/RBAC/Domain/Role'
import Permission from '@/app/RBAC/Domain/Permission'
import { Ability } from '@casl/ability'

export default class RBACState {
  public roles: Role[] = []
  public permissions: string[] = []
  public ability: Ability = new Ability()
}
