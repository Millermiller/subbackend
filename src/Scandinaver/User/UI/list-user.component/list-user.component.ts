import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import UserService from '@/Scandinaver/User/Application/user.service'
import User from '@/Scandinaver/User/Domain/User'

@Component({
  components: {},
})
export default class ListUserComponent extends Vue {
  @Inject()
  private service: UserService

  users: User[] = []
  search: string = ''
  loading: boolean = false

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.users = await this.service.getAll()
    this.loading = false
  }

  edit(row: any) {
    this.$router.push({ name: 'user', params: { id: row.id } })
  }

  async create() {

  }

  async remove(row: User) {
    if (confirm('Удалить?')) {
      await this.service.destroy(row)
      this.$snackbar.open('Пользователь удален!')
      await this.load()
    }
  }

  async find() {
    this.users = await this.service.search(this.search)
  }

  type(value: any): string {
    if (new Date(value) < new Date()) {
      return 'is-warning'
    } else {
      return 'is-success'
    }
  }

  color(value: any): string {
    if (value === 1) {
      return 'green-plan'
    }
    if (value === 2) {
      return 'red-plan'
    } else {
      return 'blue-plan'
    }
  }
}
