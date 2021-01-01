import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import UserService from '@/Scandinaver/User/Application/user.service'
import User from '@/Scandinaver/User/Domain/User'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import { permissions } from '@/permissions/permission.type'
import UserForm from '@/Scandinaver/User/Domain/UserForm'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'

@Component({
  components: {},
})
export default class ListUserComponent extends Vue {
  @Inject()
  private service: UserService

  @Inject()
  private roleService: RoleService

  private users: User[] = []
  private roles: Role[] = []
  private search: string = ''
  private loading: boolean = false
  private showModal: boolean = false
  private permissions: {}
  private generatedPassword: string = ''
  private errors: {
    _login: string
    _email: string
    _password: string
  } = {
    _login: '',
    _email: '',
    _password: '',
  }

  private edited: UserForm = {
    id: null,
    email: '',
    login: '',
    password: '',
    roles: [],
    plan: null,
  }

  constructor() {
    super()
    this.permissions = permissions
  }

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.users = await this.service.getAll()
    this.roles = await this.roleService.getAll()
    this.loading = false
  }

  async edit(user: User) {
    await this.$router.push({ name: 'user', params: { id: user.getId().toString() } })
  }

  async create() {
    let errors = false
    if (this.edited.login === '') {
      this.errors._login = 'Empty login'
      errors = true
    } else {
      this.errors._login = ''
    }

    if (this.edited.email === '') {
      this.errors._email = 'Empty mail'
      errors = true
    } else {
      this.errors._email = ''
    }

    if (this.edited.password === '') {
      this.errors._password = 'Empty password'
      errors = true
    } else {
      this.errors._password = ''
    }

    if (!errors) {
      try {
        await this.service.create(this.edited)
        await this.load()
        this.closeModal()
      } catch (response) {
        const keys = Object.keys(response.errors)
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i].toString()
          const data = response.errors[key]
          // @ts-ignore
          // eslint-disable-next-line prefer-destructuring
          this.errors[key] = data[0]
        }
      }
    }
  }

  public closeModal() {
    this.edited = {
      id: null,
      email: '',
      login: '',
      password: '',
      roles: [],
      plan: null,
    }
    this.generatedPassword = ''
    this.showModal = false
  }

  async remove(row: User) {
    await this.$buefy.dialog.confirm({
      message: 'Удалить?',
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open('Пользователь удален!')
        await this.load()
      },
    })
  }

  async find() {
    this.users = await this.service.search(this.search)
  }

  type(value: any): string {
    if (new Date(value) < new Date()) {
      return 'is-warning'
    }
    return 'is-success'
  }

  color(value: any): string {
    if (value === 1) {
      return 'green-plan'
    }
    if (value === 2) {
      return 'red-plan'
    }
    return 'blue-plan'
  }

  removeRole(user: User, role: Role): void {
    console.log(user)
    console.log(role)
  }

  generatePassword(): void {
    const length = 8
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let retVal = ''
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n))
    }
    this.edited.password = retVal
    this.generatedPassword = retVal
  }
}
