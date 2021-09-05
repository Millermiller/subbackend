import Role from '@/Scandinaver/RBAC/Domain/Role'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { Ability } from '@casl/ability'

export default class RBACState {
  public roles: Role[] = []
  public permissions: string[] = []
  public ability: Ability = new Ability()
}
