import User from '@/app/User/Domain/User'
import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { API } from './api/user.api'
import UserAPI = API.UserAPI

@Service()
export default class UserRepository extends CommonRepository<User> {
  @Inject()
  protected readonly api: UserAPI

  public async find(query: string): Promise<User[]> {
    return this.api.search(query).then(response => plainToClass(User, response.data))
  }
}
