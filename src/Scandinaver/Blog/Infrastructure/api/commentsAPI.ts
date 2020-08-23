import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Comment from '@/Scandinaver/Blog/Domain/Comment'

export namespace API {
  @Service()
  export class CommentsAPI {
    all(): Promise<AxiosResponse<Comment[]>> {
      return request.get(`/comments`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/comments/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/comments/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/comments/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Comment[]>> {
      return request.get(`/comments/search?q=${query}`)
    }
  }
}
