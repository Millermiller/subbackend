import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Passing from '@/app/Test/Domain/Passing'
import { store } from '@/app/Core/Infrastructure/store'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

export namespace API {
  @Service()
  export class PassingAPI extends BaseAPI<Passing> {
    protected readonly type: ClassType<Passing> = Passing
    protected readonly baseUrl: string = 'test'

    public async all(filters: FiltersData): Promise<AxiosResponse<PaginatedResponse<Passing>>> {
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

    public async one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    public async create(form: any): Promise<AxiosResponse> {
      throw new Error('method not implemented')
    }

    public async delete(id: number|string): Promise<any> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    public async update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/${id}`, form)
    }

    public async search(query: string): Promise<AxiosResponse<Passing[]>> {
      throw new Error('method not implemented')
    }
  }
}
