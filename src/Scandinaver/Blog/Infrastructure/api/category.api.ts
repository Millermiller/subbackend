import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class CategoryAPI extends BaseAPI<Category> {
    protected type: ClassType<Category> = Category
    protected baseUrl = 'category'

    all(): Promise<AxiosResponse<Category[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    update(id: number, form: any): Promise<AxiosResponse<Category>> {
      return request.put(`/${this.baseUrl}/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Category[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }
  }
}
