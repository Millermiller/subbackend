import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'

export default interface UserForm {
  id: number | null
  email: string
  login: string
  password: string
  password_confirmation: string
  roles: RoleForm[]
  plan: Plan | null
}
