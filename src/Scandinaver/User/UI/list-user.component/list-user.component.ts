import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import UserService from '@/Scandinaver/User/Application/user.service'
import User from '@/Scandinaver/User/Domain/User'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import UserForm from '@/Scandinaver/User/Domain/UserForm'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginationConfig } from '@/Scandinaver/Core/Infrastructure/PaginationConfig'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Component({
  components: {},
})
export default class ListUserComponent extends CRUDComponent<User, UserForm> {
  @Inject()
  protected readonly service: UserService

  @Inject()
  private readonly roleService: RoleService

  public roles: Role[] = []

  protected modalTitleCreate = this.$root.$tc('createUser')
  protected modalTitleUpdate = this.$root.$tc('updateUser')

  public search: string = ''

  protected buildForm(): UserForm {
    return new UserForm()
  }

  protected async load(): Promise<void> {
    this.loading = true
    const response = await this.service.getAll(this.filters)
    this.entities = response.data
    this.config = response.meta.pagination
    const paginatedData: PaginatedResponse<Role> = await this.roleService.getAll(new FiltersData())
    this.roles = paginatedData.data
    this.loading = false
  }

  public async edit(user: User): Promise<void> {
    await this.$router.push({ name: 'user', params: { id: user.getId().toString() } })
  }

  public async find(): Promise<void> {
    this.entities = await this.service.search(this.search)
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
  }
}
