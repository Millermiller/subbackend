import { RoleForm } from '@/app/RBAC/Domain/RoleForm'
import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Plan from '@/app/Billing/Domain/Plan'
import User from '@/app/User/Domain/User'

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
