import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import { API } from '@/Scandinaver/Blog/Infrastructure/api/commentsAPI'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import CommentsAPI = API.CommentsAPI

@Service()
export default class CommentRepository extends CommonRepository<Comment> {
  @Inject()
  protected api: CommentsAPI

  async find(query: string): Promise<Comment[]> {
    return this.api.search(query).then(response => plainToClass(Comment, response.data))
  }
}
