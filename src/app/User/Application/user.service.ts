import { BaseService } from '@/app/Core/Application/base.service'
import User from '@/app/User/Domain/User'
import { Inject, Service } from 'typedi'
import UserRepository from '@/app/User/Infrastructure/user.repository'
import UserForm from '@/app/User/Domain/UserForm'
import RoleService from '@/app/RBAC/Application/role.service'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class UserService extends BaseService<User> {
  @Inject()
  private readonly userRepository: UserRepository

  @Inject()
  private readonly roleService: RoleService

  public async get(filters: FiltersData): Promise<PaginatedResponse<User>> {
    return this.userRepository.paginate(filters)
  }

  public async create(form: UserForm): Promise<User> {
    const user = new User()
    user.login = form.login
    user.email = form.email
    user.password = form.password
    user.roles = form.roles.map(roleForm => roleForm.fromDTO())
    user._password_confirmation = form.password
    return this.userRepository.create(user.toDTO())
  }

  public async update(user: User): Promise<User> {
    return this.userRepository.update(user, user.toDTO())
  }

  public async destroy(user: User): Promise<void> {
    return this.userRepository.delete(user)
  }

  public async getOne(id: number): Promise<User> {
    return this.userRepository.one(id)
  }

  public async search(query: string): Promise<User[]> {
    return this.userRepository.find(query)
  }
}
