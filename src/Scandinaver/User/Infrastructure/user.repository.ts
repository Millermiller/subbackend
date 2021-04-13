import User from '@/Scandinaver/User/Domain/User'
import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from './api/user.api'
import UserAPI = API.UserAPI

@Service()
export default class UserRepository extends CommonRepository<User> {
  @Inject()
  protected api: UserAPI

  async find(query: string): Promise<User[]> {
    return this.api.search(query).then(response => plainToClass(User, response.data))
  }
}
