import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/Scandinaver/RBAC/Application/permission.service'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'
import PermissionGroupService from '@/Scandinaver/RBAC/Application/permission.group.service'

@Component({
  components: {},
})
export default class SettingsComponent extends Vue {
  @Inject()
  private permissionService: PermissionService

  @Inject()
  private roleService: RoleService

  @Inject()
  private permissionGroupService: PermissionGroupService

  permissions: Permission[] = []
  roles: Role[] = []
  loading: boolean = false
  model: any = {}
  groups: any = []
  expanded: number|null = null

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.permissions = await this.permissionService.getAll()
    this.roles = await this.roleService.getAll()
    this.groups = await this.permissionGroupService.getAll()
    // eslint-disable-next-line no-return-assign
    await this.roles.map(role => (this.model[role.getId()] = this.permissions.reduce((result: any, item: Permission) => {
      result[item.getId()] = role.permissions.find(p => p.getId() === item.getId()) !== undefined
      return result
    }, {})))
    this.loading = false
  }

  async change(role: Role, permission: Permission, state: boolean) {
    if (state) {
      await this.roleService.attachPermission(role, permission)
    }

    if (!state) {
      await this.roleService.detachPermission(role, permission)
    }
  }

  public toggle(id: number|null) {
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
