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
      const existingFilter = filters.filter.filter(i => i.field === 'language.id')[0]
      if (existingFilter) {
        existingFilter.value = store.getters.language ? store.getters.language.id : 1
      } else {
        filters.filter.push({ field: 'language.id', value: store.getters.language.id, operator: 'eq' })
      }
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
