import Component from 'vue-class-component'
import Vue from 'vue'
import User from './models/User'
import userAPI from '@/api/userAPI'

@Component({
  components: {},
})
export default class UsersModule extends Vue {
  users: User[] = []
  search: string = ''
  loading: boolean = false

  mounted() {
    this.load()
  }

  load() {
    this.loading = true
    userAPI.all().then(
      (response) => {
        this.users = response.data
        this.loading = false
      },
      (response) => {
        console.log(response)
      },
    )
  }

  edit(row: any) {
    this.$router.push({ name: 'Юзер', params: { id: row.id } })
  }

  remove(row: any) {
    if (confirm('Удалить?')) {
      userAPI.destroy(row.id).then(
        (response) => {
          if (response.status === 204) {
            this.$snackbar.open('Пользователь удален!')
            this.load()
          } else {
            this.$snackbar.open(this.$tc('error'))
          }
        },
        (response) => {
          this.$snackbar.open(this.$tc('error'))
          console.log(response)
        },
      )
    }
  }

  find() {
    userAPI.search(this.search).then(
      (response) => {
        this.users = response.data
      },
      (response) => {
        this.$snackbar.open(this.$tc('error'))
        console.log(response)
      },
    )
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
