import { Entity } from '@/app/Core/Domain/Contract/Entity'
import { AxiosResponse } from 'axios'
import { ClassType } from 'class-transformer/ClassTransformer'
import request from '@/utils/request'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { store } from '@/app/Core/Infrastructure/store'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

export abstract class BaseAPI<D extends Entity> {
  protected readonly type: ClassType<D>
  protected abstract readonly baseUrl: string

  get class(): ClassType<D> {
    return this.type
  }

  public async all(filters: FiltersData): Promise<AxiosResponse<PaginatedResponse<D>>> {
    return request.get(`/${this.baseUrl}`, {
      params: filters,
    })
  }

  public async one(id: number): Promise<AxiosResponse<D>> {
    return request.get(`/${this.baseUrl}/${id}`)
  }

  public async create(form: any): Promise<AxiosResponse<D>> {
    return request.post(`/${this.baseUrl}`, form)
  }

  public async delete(id: number|string): Promise<any> {
    return request.delete(`/${this.baseUrl}/${id}`)
  }

  public async update(id: number|string, form: any): Promise<AxiosResponse<D>> {
    return request.post(`/${this.baseUrl}/${id}`, form)
  }

  public async search(query: string): Promise<AxiosResponse<D[]>> {
    return request.get(`/${this.baseUrl}/search?q=${query}`)
  }
}
