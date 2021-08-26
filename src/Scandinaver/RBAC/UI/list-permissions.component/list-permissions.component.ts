import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/Scandinaver/RBAC/Application/permission.service'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { PermissionForm } from '@/Scandinaver/RBAC/Domain/PermissionForm'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import PermissionGroupService from '@/Scandinaver/RBAC/Application/permission.group.service'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListPermissionsComponent extends CRUDComponent<Permission, PermissionForm> {
  @Inject()
  protected readonly service: PermissionService

  @Inject()
  private readonly permissionGroupService: PermissionGroupService

  public groups: PermissionGroup[] = []

  protected buildForm(): PermissionForm {
    return new PermissionForm();
  }

  protected async load(): Promise<void> {
    this.loading = true
    this.entities = await this.service.getAll()
    this.groups = await this.permissionGroupService.getAll()
    this.loading = false
  }
}
