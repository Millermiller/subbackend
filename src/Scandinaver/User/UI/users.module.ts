import Component from 'vue-class-component'
import Vue from 'vue'
import User from '../Domain/User'
import UserService from '@/Scandinaver/User/Application/user.service'
import { Inject } from 'vue-typedi'

@Component({
  components: {},
})
export default class UsersModule extends Vue {

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
    this.$router.push({ name: 'Юзер', params: { id: row.id } })
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
