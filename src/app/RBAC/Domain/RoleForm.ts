import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Role from '@/app/RBAC/Domain/Role'

export class RoleForm extends EntityForm<Role> {
  name: string
  slug: string
  description: string

  public fromDTO(): Role {
    const role = new Role()
    role.id = this.id || 0
    role.name = this.name
    role.slug = this.slug
    role.description = this.description
    return role
  }
}
