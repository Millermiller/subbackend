import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/Scandinaver/RBAC/Application/permission.service'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'

@Component({
  components: {},
})
export default class SettingsComponent extends Vue {
  @Inject()
  private permissionService: PermissionService

  @Inject()
  private roleService: RoleService

  permissions: Permission[] = []
  roles: Role[] = []
  loading: boolean = false
  model: any = {}

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.permissions = await this.permissionService.getAll()
    this.roles = await this.roleService.getAll()
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
}
