import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionGroupService from '@/Scandinaver/RBAC/Application/permission.group.service'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import { permissions } from '@/permissions/permission.type'
import { PermissionGroupForm } from '@/Scandinaver/RBAC/Domain/PermissionGroupForm'

@Component({
  components: {},
})
export default class ListGroupsComponent extends Vue {
  @Inject()
  private readonly service: PermissionGroupService

  public permissionGroups: PermissionGroup[] = []
  public search: string = ''
  public loading: boolean = false
  public isComponentModalActive: boolean = false
  public edited: PermissionGroupForm = {
    id: null,
    name: '',
    slug: '',
    description: '',
  }
  public permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.permissionGroups = await this.service.getAll()
    this.loading = false
  }

  public edit(permissionGroup: PermissionGroup): void {
    this.edited = permissionGroup
    this.showCreateModal()
  }

  public async create(): Promise<void> {
    if (this.edited.id) {
      const group = PermissionGroup.fromDTO(this.edited)
      await this.service.update(group, this.edited)
    } else {
      await this.service.create(this.edited)
    }
    await this.load()
    this.closeCreateModal()
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
    };
    this.isComponentModalActive = false
  }

  public async remove(row: PermissionGroup): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open(this.$tc('groupRemoved'))
        await this.load()
      },
    })
  }

  public async find(): Promise<void> {
    this.permissionGroups = await this.service.search(this.search)
  }
}
