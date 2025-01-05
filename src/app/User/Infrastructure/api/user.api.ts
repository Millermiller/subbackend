import { Service } from 'typedi'
import User from '@/app/User/Domain/User'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'
import { store } from '@/app/Core/Infrastructure/store'

export namespace API {
  @Service()
  export class UserAPI extends BaseAPI<User> {
    protected readonly type: ClassType<User> = User
    protected readonly baseUrl = 'user'

    public async one(id: number): Promise<AxiosResponse<User>> {
      return request.get(`/${this.baseUrl}/${id}?includes[]=roles`)
    }

    public async all(filters: FiltersData): Promise<AxiosResponse<PaginatedResponse<User>>> {
      return request.get(`/${this.baseUrl}`, {
        params: {
          sort: filters.sort,
          filter: filters.filter,
          pageSize: filters.pageSize,
        },
      })
    }
  }
}
