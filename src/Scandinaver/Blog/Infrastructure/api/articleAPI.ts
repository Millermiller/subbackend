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

    all(): Promise<AxiosResponse<Post[]>> {
      return request.get('/post')
    }

    delete(entity: Post): Promise<AxiosResponse> {
      return request.delete(`/post/${entity.getId()}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/post/${id}`)
    }

    update(entity: Post, form: any): Promise<AxiosResponse> {
      return request.post(`/post/${entity.getId()}`, form)
    }

    create(data: any) {
      return request.post('/post', data)
    }

    search(query: string): Promise<AxiosResponse<Post[]>> {
      return request.get(`/post/search?q=${query}`)
    }
  }
}
