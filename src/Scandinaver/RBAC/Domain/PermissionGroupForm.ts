import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'

export class PermissionGroupForm extends EntityForm<PermissionGroup> {
  name: string
  slug: string
  description: string

  public fromDTO(): PermissionGroup {
    const permissionGroup = new PermissionGroup()
    permissionGroup.id = this.id || 0
    permissionGroup.name = this.name
    permissionGroup.slug = this.slug
    permissionGroup.description = this.description
    return permissionGroup
  }
}
