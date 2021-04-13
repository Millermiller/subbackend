import { Inject, Service } from 'typedi'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from './api/comments.api'
import CommentsAPI = API.CommentsAPI

@Service()
export default class CommentRepository extends CommonRepository<Comment> {
  @Inject()
  protected api: CommentsAPI
}
