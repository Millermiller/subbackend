import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'

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
    title: '',
    slug: '',
    description: '',
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.roles = await this.service.getAll()
    this.loading = false
  }

  edit(row: any) {
    this.edited = row
    this.showCreateModal()
  }

  async create() {
    if (this.edited.id) {
      await this.service.update(this.edited, this.edited)
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
    this.isComponentModalActive = false
  }

  async remove(row: Role) {
    await this.$buefy.dialog.confirm({
      message: 'Удалить?',
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open('Роль удалена')
        await this.load()
      },
    })
  }

  async find() {
    this.roles = await this.service.search(this.search)
  }
}
