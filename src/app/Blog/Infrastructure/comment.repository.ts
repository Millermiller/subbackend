import { Inject, Service } from 'typedi'
import Comment from '@/app/Blog/Domain/Comment'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { API } from './api/comments.api'
import CommentsAPI = API.CommentsAPI

@Service()
export default class CommentRepository extends CommonRepository<Comment> {
  @Inject()
  protected api: CommentsAPI
}
