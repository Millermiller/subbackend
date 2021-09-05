import { Service } from 'typedi'
import User from '@/Scandinaver/User/Domain/User'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { AxiosResponse } from 'axios'
import request from '@/utils/request'

export namespace API {
  @Service()
  export class UserAPI extends BaseAPI<User> {
    protected readonly type: ClassType<User> = User
    protected readonly baseUrl = 'user'

    public async one(id: number): Promise<AxiosResponse<User>> {
      return request.get(`/${this.baseUrl}/${id}?includes[]=roles`)
    }

    public async all(): Promise<AxiosResponse<User[]>> {
      return request.get(`/${this.baseUrl}?includes[]=roles`)
    }
  }
}
