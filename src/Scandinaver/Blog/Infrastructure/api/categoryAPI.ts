import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Category from '@/Scandinaver/Blog/Domain/Category'

export namespace API {
  @Service()
  export class CategoryAPI {
    all(): Promise<AxiosResponse<Category[]>> {
      return request.get(`/categories`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/categories/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/categories/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/categories/${id}`, form)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.put(`/categories`, form)
    }

    search(query: string): Promise<AxiosResponse<Category[]>> {
      return request.get(`/categories/search?q=${query}`)
    }
  }
}
