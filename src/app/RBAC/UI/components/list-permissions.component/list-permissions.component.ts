import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/app/RBAC/Application/permission.service'
import Permission from '@/app/RBAC/Domain/Permission'
import { PermissionForm } from '@/app/RBAC/Domain/PermissionForm'
import PermissionGroup from '@/app/RBAC/Domain/PermissionGroup'
import PermissionGroupService from '@/app/RBAC/Application/permission.group.service'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

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
    const paginatedDataPermission: PaginatedResponse<Permission> = await this.service.get(this.filters)
    this.entities = paginatedDataPermission.data
    this.config = paginatedDataPermission.meta.pagination
    const paginatedDataPermissionGroup: PaginatedResponse<PermissionGroup> = await this.permissionGroupService.get(new FiltersData())
    this.groups = paginatedDataPermissionGroup.data
    this.loading = false
  }
}
