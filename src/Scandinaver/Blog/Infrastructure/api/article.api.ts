import request from '@/utils/request'
import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Post from '@/Scandinaver/Blog/Domain/Post'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class ArticleAPI extends BaseAPI<Post> {
    protected type: ClassType<Post> = Post
    protected baseUrl = 'post'

    all(): Promise<AxiosResponse<Post[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/${id}`, form)
    }

    create(data: any) {
      return request.post(`/${this.baseUrl}`, data)
    }

    search(query: string): Promise<AxiosResponse<Post[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }
  }
}
