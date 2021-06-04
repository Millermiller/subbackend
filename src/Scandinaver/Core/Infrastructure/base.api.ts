import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { AxiosResponse } from 'axios'
import { ClassType } from 'class-transformer/ClassTransformer'
import request from '@/utils/request'

export abstract class BaseAPI<D extends Entity> {
  protected readonly type: ClassType<D>
  protected abstract readonly baseUrl: string

  get class(): ClassType<D> {
    return this.type
  }

  public async all(): Promise<AxiosResponse<D[]>> {
    return request.get(`/${this.baseUrl}`)
  }

  public async one(id: number): Promise<AxiosResponse<D>> {
    return request.get(`/${this.baseUrl}/${id}`)
  }

  public async create(form: any): Promise<AxiosResponse<D>> {
    return request.post(`/${this.baseUrl}/`, form)
  }

  public async delete(id: number|string): Promise<any> {
    return request.delete(`/${this.baseUrl}/${id}`)
  }

  public async update(id: number|string, form: any): Promise<AxiosResponse<D>> {
    return request.put(`/${this.baseUrl}/${id}`, form)
  }

  public async search(query: string): Promise<AxiosResponse<D[]>> {
    return request.get(`/${this.baseUrl}/search?q=${query}`)
  }
}
