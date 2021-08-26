import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export default class UserForm extends EntityForm {
  email: string
  login: string
  password: string = ''
  password_confirmation: string
  roles: RoleForm[] = []
  plan: Plan | null
}
