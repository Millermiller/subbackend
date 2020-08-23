import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import User from '@/Scandinaver/User/Domain/User'
import { API } from '@/Scandinaver/User/Infrastructure/api/userAPI'
import { Inject, Service } from 'typedi'
import UserAPI = API.UserAPI
import { plainToClass } from 'class-transformer'

@Service()
export default class UserRepository extends BaseRepository<User> {

  @Inject()
  private api: UserAPI

  async all(): Promise<User[]> {
   return this.api.all().then(response => plainToClass(User, response.data))
  }

  async delete(entity: User): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<User> {
    return this.api.load(id).then(response => plainToClass(User, response.data))
  }

  async save(entity: User): Promise<User> {
    return this.api.save(entity.id, entity).then(response => plainToClass(User, response.data))
  }

  async find(query: string): Promise<User[]> {
    return this.api.search(query).then(response => plainToClass(User, response.data))
  }
}
