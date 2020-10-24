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
      return request.get('/comments')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/comments/${id}`)
    }

    create(data: any) {
      return request.post('/post', data)
    }

    update(entity: Comment, form: any): Promise<AxiosResponse> {
      return request.post(`/comments/${entity.getId()}`, form)
    }

    delete(entity: Comment): Promise<AxiosResponse> {
      return request.delete(`/comments/${entity.getId()}`)
    }

    search(query: string): Promise<AxiosResponse<Comment[]>> {
      return request.get(`/comments/search?q=${query}`)
    }
  }
}
