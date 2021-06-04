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
  private readonly permissionService: PermissionService

  @Inject()
  private readonly permissionGroupService: PermissionGroupService

  public permissions: Permission[] = []
  public groups: PermissionGroup[] = []
  public loading: boolean = false
  public isComponentModalActive: boolean = false
  public edited: PermissionForm = {
    id: null,
    name: '',
    slug: '',
    description: '',
    group: null,
  }
  public permissionsList: {}

  constructor() {
    super();
    this.permissionsList = permissions;
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.permissions = await this.permissionService.getAll()
    this.groups = await this.permissionGroupService.getAll()
    this.loading = false
  }

  public edit(permission: Permission): void {
    this.edited = permission.toDTO()
    this.showCreateModal()
  }

  public async create(): Promise<void> {
    this.loading = true
    if (this.edited.id) {
      const permission = Permission.fromDTO(this.edited)
      await this.permissionService.update(permission, this.edited)
    } else {
      await this.permissionService.create(this.edited)
    }
    await this.load()
    this.closeCreateModal()
    this.loading = false
  }

  public showCreateModal(): void {
    this.isComponentModalActive = true
  }

  private closeCreateModal(): void {
    this.edited = {
      id: null,
      name: '',
      slug: '',
      description: '',
      group: null,
    };
    this.isComponentModalActive = false
  }

  public async remove(row: Permission): Promise<void> {
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
