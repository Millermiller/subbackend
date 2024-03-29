import { Service } from 'typedi'
import Comment from '@/app/Blog/Domain/Comment'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class CommentsAPI extends BaseAPI<Comment> {
    protected type: ClassType<Comment> = Comment
    protected baseUrl = 'comment'
  }
}
