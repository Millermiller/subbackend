import { Service } from 'typedi'
import User from '@/Scandinaver/User/Domain/User'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class UserAPI extends BaseAPI<User> {
    protected type: ClassType<User> = User
    protected baseUrl = 'user'
  }
}
