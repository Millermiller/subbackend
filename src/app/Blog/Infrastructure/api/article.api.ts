import { Service } from 'typedi'
import Post from '@/app/Blog/Domain/Post'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class ArticleAPI extends BaseAPI<Post> {
    protected type: ClassType<Post> = Post
    protected baseUrl = 'post'
  }
}
