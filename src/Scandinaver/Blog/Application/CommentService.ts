import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import CommentRepository from '@/Scandinaver/Blog/Infrastructure/CommentRepository'

@Service()
export default class CommentService extends BaseService<Comment> {
  @Inject()
  private repository: CommentRepository

  async create(input: any): Promise<Comment> {
    return new Comment()
  }

  async getAll(): Promise<Comment[]> {
    return this.repository.all()
  }

  async destroy(comment: Comment) {
    return this.repository.delete(comment)
  }

  async search(query: string): Promise<Comment[]> {
    return this.repository.find(query)
  }

  async update(comment: Comment): Promise<Comment> {
    return this.repository.update(comment, comment)
  }
}
