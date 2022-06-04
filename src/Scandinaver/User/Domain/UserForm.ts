import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Plan from '@/Scandinaver/Billing/Domain/Plan'
import User from '@/Scandinaver/User/Domain/User'

export default class UserForm extends EntityForm<User> {
  email: string
  login: string
  password: string = ''
  password_confirmation: string
  roles: RoleForm[] = []
  plan: Plan | null

  fromDTO(): User {
    return undefined;
  }
}
