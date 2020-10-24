import User from '@/Scandinaver/User/Domain/User'
import { API } from '@/Scandinaver/User/Infrastructure/api/userAPI'
import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import UserAPI = API.UserAPI

@Service()
export default class UserRepository extends CommonRepository<User> {
  @Inject()
  protected api: UserAPI

  async find(query: string): Promise<User[]> {
    return this.api.search(query).then(response => plainToClass(User, response.data))
  }
}
