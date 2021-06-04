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
  private readonly service: RoleService

  public roles: Role[] = []
  public search: string = ''
  public loading: boolean = false
  private isComponentModalActive: boolean = false
  private edited: RoleForm = {
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
    this.roles = await this.service.getAll()
    this.loading = false
  }

  public edit(role: Role): void {
    this.edited = role.toDTO()
    this.showCreateModal()
  }

  public async create(): Promise<void> {
    if (this.edited.id) {
      const role = Role.fromDTO(this.edited)
      await this.service.update(role, this.edited)
    } else {
      await this.service.create(this.edited)
    }
    await this.load()
    this.closeCreateModal()
  }

  public showCreateModal(): void {
    this.isComponentModalActive = true
  }

  public closeCreateModal(): void {
    this.edited = {
      id: null,
      name: '',
      slug: '',
      description: '',
    };
    this.isComponentModalActive = false
  }

  public async remove(role: Role): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(role)
        this.$buefy.snackbar.open(this.$tc('roleRemoved'))
        await this.load()
      },
    })
  }

  public async removePermission(role: Role, permission: Permission): Promise<void> {
    await this.service.detachPermission(role, permission)
    await this.load()
  }

  public async find(): Promise<void> {
    this.roles = await this.service.search(this.search)
  }
}
