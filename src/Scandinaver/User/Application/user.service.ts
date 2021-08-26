import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import User from '@/Scandinaver/User/Domain/User'
import { Inject, Service } from 'typedi'
import UserRepository from '@/Scandinaver/User/Infrastructure/user.repository'
import UserForm from '@/Scandinaver/User/Domain/UserForm'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'

@Service()
export default class UserService extends BaseService<User> {
  @Inject()
  private readonly userRepository: UserRepository

  @Inject()
  private readonly roleService: RoleService

  public async create(form: UserForm): Promise<User> {
    const user = new User()
    user.login = form.login
    user.email = form.email
    user.password = form.password
    user.roles = form.roles.map(roleForm => this.roleService.fromDTO(roleForm))
    user._password_confirmation = form.password
    return this.userRepository.create(user.toDTO())
  }

  public async getAll(): Promise<User[]> {
    return this.userRepository.all()
  }

  public async getOne(id: number): Promise<User> {
    return this.userRepository.one(id)
  }

  public async destroy(user: User): Promise<void> {
    return this.userRepository.delete(user)
  }

  public async search(query: string): Promise<User[]> {
    return this.userRepository.find(query)
  }

  public async update(user: User): Promise<User> {
    return this.userRepository.update(user, user.toDTO())
  }

  fromDTO(dto: EntityForm): User {
    return undefined;
  }
}
