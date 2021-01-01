import Plan from '@/Scandinaver/Plan/Domain/Plan'
import Role from '@/Scandinaver/RBAC/Domain/Role'

export default interface UserForm {
  id: number | null
  email: string
  login: string
  password: string
  roles: Role[]
  plan: Plan | null
}
