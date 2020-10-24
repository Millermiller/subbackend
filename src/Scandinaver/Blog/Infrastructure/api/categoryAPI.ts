import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Comment from '@/Scandinaver/Blog/Domain/Comment'

export namespace API {
  @Service()
  export class CategoryAPI extends BaseAPI<Category> {
    protected type: ClassType<Category> = Category

    all(): Promise<AxiosResponse<Category[]>> {
      return request.get('/categories')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/categories/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post('/categories', form)
    }

    delete(category: Category): Promise<AxiosResponse> {
      return request.delete(`/categories/${category.getId()}`)
    }

    update(category: Category, form: any): Promise<AxiosResponse<Category>> {
      return request.put(`/categories/${category.getId()}`, form)
    }

    search(query: string): Promise<AxiosResponse<Category[]>> {
      return request.get(`/categories/search?q=${query}`)
    }
  }
}
