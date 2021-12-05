import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/Scandinaver/RBAC/Application/permission.service'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'
import PermissionGroupService from '@/Scandinaver/RBAC/Application/permission.group.service'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Component({
  components: {},
})
export default class SettingsComponent extends Vue {
  @Inject()
  private readonly permissionService: PermissionService

  @Inject()
  private readonly roleService: RoleService

  @Inject()
  private readonly permissionGroupService: PermissionGroupService

  public permissions: Permission[] = []
  public roles: Role[] = []
  public loading: boolean = false
  public model: any = {}
  public groups: any = []
  public expanded: number|null = null

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.permissions = await this.permissionService.getAll(new FiltersData())
    const paginatedData: PaginatedResponse<Role> = await this.roleService.getAll(new FiltersData())
    this.roles = paginatedData.data
    this.groups = await this.permissionGroupService.getAll(new FiltersData())
    // eslint-disable-next-line no-return-assign
    this.roles.map(role => (this.model[role.getId()] = this.permissions.reduce((result: any, item: Permission) => {
      result[item.getId()] = role.permissions.find(p => p.getId() === item.getId()) !== undefined
      return result
    }, {})))
    this.loading = false
  }

  public async change(role: Role, permission: Permission, state: boolean): Promise<void> {
    if (state) {
      await this.roleService.attachPermission(role, permission)
    }

    if (!state) {
      await this.roleService.detachPermission(role, permission)
    }
  }

  public toggle(id: number|null): void {
    if (id === null) {
      this.expanded = this.expanded === null ? null : 0
    }
    if (this.expanded === id) {
      this.expanded = 0
    } else {
      this.expanded = id
    }
  }
}
