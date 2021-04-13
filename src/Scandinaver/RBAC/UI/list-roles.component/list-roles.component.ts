import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { permissions } from '@/permissions/permission.type'

@Component({
  components: {},
})
export default class ListRolesComponent extends Vue {
  @Inject()
  private service: RoleService

  roles: Role[] = []
  search: string = ''
  loading: boolean = false
  private isComponentModalActive: boolean = false
  private edited: RoleForm = {
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
    this.roles = await this.service.getAll()
    this.loading = false
  }

  edit(role: Role) {
    this.edited = role.toDTO()
    this.showCreateModal()
  }

  async create() {
    if (this.edited.id) {
      const role = Role.fromDTO(this.edited)
      await this.service.update(role, this.edited)
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

  async remove(role: Role) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(role)
        this.$buefy.snackbar.open(this.$tc('roleRemoved'))
        await this.load()
      },
    })
  }

  async removePermission(role: Role, permission: Permission) {
    await this.service.detachPermission(role, permission)
    await this.load()
  }

  async find() {
    this.roles = await this.service.search(this.search)
  }
}
