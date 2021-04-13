import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import User from '@/Scandinaver/User/Domain/User'
import { Inject, Service } from 'typedi'
import UserRepository from '@/Scandinaver/User/Infrastructure/user.repository'
import UserForm from '@/Scandinaver/User/Domain/UserForm'
import Role from '@/Scandinaver/RBAC/Domain/Role'

@Service()
export default class UserService extends BaseService<User> {
  @Inject()
  private userRepository: UserRepository

  create(form: UserForm): Promise<User> | User | any {
    const user = new User()
    user.login = form.login
    user.email = form.email
    user.password = form.password
    user.roles = form.roles.map(roleForm => Role.fromDTO(roleForm))
    user._password_confirmation = form.password
    return this.userRepository.create(user.toDTO())
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.all()
  }

  async getOne(id: number): Promise<User> {
    return this.userRepository.one(id)
  }

  async destroy(user: User) {
    return this.userRepository.delete(user)
  }

  async search(query: string): Promise<User[]> {
    return this.userRepository.find(query)
  }

  async update(user: User): Promise<User> {
    return this.userRepository.update(user, user.toDTO())
  }
}
