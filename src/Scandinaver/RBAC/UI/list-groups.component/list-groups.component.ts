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
  private service: PermissionGroupService

  permissionGroups: PermissionGroup[] = []
  search: string = ''
  loading: boolean = false
  private isComponentModalActive: boolean = false
  private edited: PermissionGroupForm = {
    id: null,
    name: '',
    slug: '',
    description: '',
  }
  permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.permissionGroups = await this.service.getAll()
    this.loading = false
  }

  edit(permissionGroup: PermissionGroup) {
    this.edited = permissionGroup
    this.showCreateModal()
  }

  async create() {
    if (this.edited.id) {
      const group = PermissionGroup.fromDTO(this.edited)
      await this.service.update(group, this.edited)
    } else {
      await this.service.create(this.edited)
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
    };
    this.isComponentModalActive = false
  }

  async remove(row: PermissionGroup) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open(this.$tc('groupRemoved'))
        await this.load()
      },
    })
  }

  async find() {
    this.permissionGroups = await this.service.search(this.search)
  }
}
