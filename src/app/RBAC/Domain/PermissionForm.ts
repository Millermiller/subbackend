import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Permission from '@/app/RBAC/Domain/Permission'

export class PermissionForm extends EntityForm<Permission> {
  name: string
  slug: string
  description: string
  group: number | null

  public fromDTO(): Permission {
    const permission = new Permission()
    permission.id = this.id || 0
    permission.name = this.name
    permission.slug = this.slug
    permission.description = this.description
    return permission
  }
}
