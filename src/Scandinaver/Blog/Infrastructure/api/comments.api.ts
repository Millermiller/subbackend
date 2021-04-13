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

    all(): Promise<AxiosResponse<Comment[]>> {
      return request.get('/comment')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/comment/${id}`)
    }

    create(data: any) {
      return request.post('/comment', data)
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/comment/${id}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/comment/${id}`)
    }

    search(query: string): Promise<AxiosResponse<Comment[]>> {
      return request.get(`/comment/search?q=${query}`)
    }
  }
}
