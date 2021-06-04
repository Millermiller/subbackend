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
  private readonly service: UserService

  @Inject()
  private readonly roleService: RoleService

  public users: User[] = []
  public roles: Role[] = []
  public search: string = ''
  public loading: boolean = false
  public showModal: boolean = false
  public permissions: {}
  public generatedPassword: string = ''
  public errors: {
    _login: string
    _email: string
    _password: string
  } = {
    _login: '',
    _email: '',
    _password: '',
  }

  public edited: UserForm = {
    id: null,
    email: '',
    login: '',
    password: '',
    password_confirmation: '',
    roles: [],
    plan: null,
  }

  constructor() {
    super()
    this.permissions = permissions
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.users = await this.service.getAll()
    this.roles = await this.roleService.getAll()
    this.loading = false
  }

  public async edit(user: User): Promise<void> {
    await this.$router.push({ name: 'user', params: { id: user.getId().toString() } })
  }

  public async create(): Promise<void> {
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

  public closeModal(): void {
    this.edited = {
      id: null,
      email: '',
      login: '',
      password: '',
      password_confirmation: '',
      roles: [],
      plan: null,
    }
    this.generatedPassword = ''
    this.showModal = false
  }

  public async remove(row: User): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        this.loading = true
        await this.service.destroy(row)
        this.loading = false
        this.$buefy.snackbar.open(this.$tc('userRemoved'))
        await this.load()
      },
    })
  }

  public async find(): Promise<void> {
    this.users = await this.service.search(this.search)
  }

  public type(value: any): string {
    if (new Date(value) < new Date()) {
      return 'is-warning'
    }
    return 'is-success'
  }

  public color(value: any): string {
    if (value === 1) {
      return 'green-plan'
    }
    if (value === 2) {
      return 'red-plan'
    }
    return 'blue-plan'
  }

  public removeRole(user: User, role: Role): void {
    console.log(user)
    console.log(role)
  }

  public generatePassword(): void {
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
