import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionService from '@/Scandinaver/RBAC/Application/permission.service'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { PermissionForm } from '@/Scandinaver/RBAC/Domain/PermissionForm'

@Component({
  components: {},
})
export default class ListPermissionsComponent extends Vue {
  @Inject()
  private service: PermissionService

  permissions: Permission[] = []
  search: string = ''
  loading: boolean = false
  private isComponentModalActive: boolean = false
  private edited: PermissionForm = {
    title: '',
    slug: '',
    description: '',
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.permissions = await this.service.getAll()
    this.loading = false
  }

  edit(row: any) {
    this.$router.push({ name: 'permission', params: { id: row.id } })
  }

  async create() {
    await this.service.create(this.edited)
    await this.load()
    this.closeCreateModal()
  }

  showCreateModal() {
    this.isComponentModalActive = true
  }

  closeCreateModal() {
    this.isComponentModalActive = false
  }

  async remove(row: Permission) {
    await this.$buefy.dialog.confirm({
      message: 'Удалить?',
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open('Разрешение удалено')
        await this.load()
      },
    })
  }

  async find() {
    this.permissions = await this.service.search(this.search)
  }
}
