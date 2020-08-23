import request from '@/utils/request'
import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Post from '@/Scandinaver/Blog/Domain/Post'

export namespace API {
  @Service()
  export class ArticleAPI {
    all(): Promise<AxiosResponse<Post[]>> {
      return request.get(`/articles`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/articles/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/articles/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/articles/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Post[]>> {
      return request.get(`/articles/search?q=${query}`)
    }
  }
}
