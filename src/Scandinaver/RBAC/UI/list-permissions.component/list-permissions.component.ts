import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/Scandinaver/RBAC/Application/permission.service'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { PermissionForm } from '@/Scandinaver/RBAC/Domain/PermissionForm'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import PermissionGroupService from '@/Scandinaver/RBAC/Application/permission.group.service'
import { permissions } from '@/permissions/permission.type'

@Component({
  components: {},
})
export default class ListPermissionsComponent extends Vue {
  @Inject()
  private permissionService: PermissionService

  @Inject()
  private permissionGroupService: PermissionGroupService

  permissions: Permission[] = []
  private groups: PermissionGroup[] = []
  private loading: boolean = false
  private isComponentModalActive: boolean = false
  private edited: PermissionForm = {
    id: null,
    name: '',
    slug: '',
    description: '',
    group: null,
  }
  permissionsList: {}

  constructor() {
    super();
    this.permissionsList = permissions;
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.permissions = await this.permissionService.getAll()
    this.groups = await this.permissionGroupService.getAll()
    this.loading = false
  }

  edit(permission: Permission) {
    this.edited = permission.toDTO()
    this.showCreateModal()
  }

  async create() {
    if (this.edited.id) {
      await this.permissionService.update(this.edited.id, this.edited)
    } else {
      await this.permissionService.create(this.edited)
    }
    await this.load()
    this.closeCreateModal()
  }

  showCreateModal() {
    this.isComponentModalActive = true
  }

  closeCreateModal() {
    this.edited = {
      id: null,
      name: '',
      slug: '',
      description: '',
      group: null,
    };
    this.isComponentModalActive = false
  }

  async remove(row: Permission) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.permissionService.destroy(row)
        this.$buefy.snackbar.open(this.$tc('permissionRemoved'))
        await this.load()
      },
    })
  }
}
