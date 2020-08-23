import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import User from '@/Scandinaver/User/Domain/User'
import { Inject, Service } from 'typedi'
import UserRepository from '@/Scandinaver/User/Infrastructure/user.repository'

@Service()
export default class UserService extends BaseService<User> {

  @Inject()
  private userRepository: UserRepository

  create(input: any): Promise<User> | User {
    return new User();
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
    return this.userRepository.save(user)
  }
}
