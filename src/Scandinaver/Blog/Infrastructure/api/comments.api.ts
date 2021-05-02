import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class CommentsAPI extends BaseAPI<Comment> {
    protected type: ClassType<Comment> = Comment
    protected baseUrl = 'comment'

    all(): Promise<AxiosResponse<Comment[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(data: any) {
      return request.post(`/${this.baseUrl}`, data)
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/${id}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    search(query: string): Promise<AxiosResponse<Comment[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }
  }
}
