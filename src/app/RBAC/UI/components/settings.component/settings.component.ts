import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/app/RBAC/Application/permission.service'
import Permission from '@/app/RBAC/Domain/Permission'
import Role from '@/app/RBAC/Domain/Role'
import RoleService from '@/app/RBAC/Application/role.service'
import PermissionGroupService from '@/app/RBAC/Application/permission.group.service'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

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
    const permissionsData = await this.permissionService.get(new FiltersData())
    this.permissions = permissionsData.data
    const paginatedData: PaginatedResponse<Role> = await this.roleService.get(new FiltersData())
    this.roles = paginatedData.data
    const groupsData = await this.permissionGroupService.get(new FiltersData())
    this.groups = groupsData.data
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
