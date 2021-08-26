import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import CommentRepository from '@/Scandinaver/Blog/Infrastructure/comment.repository'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

@Service()
export default class CommentService extends BaseService<Comment> {
  @Inject()
  private readonly repository: CommentRepository

  public async create(input: any): Promise<Comment> {
    return new Comment()
  }

  public async getAll(): Promise<Comment[]> {
    return this.repository.all()
  }

  public async destroy(comment: Comment): Promise<void> {
    return this.repository.delete(comment)
  }

  public async search(query: string): Promise<Comment[]> {
    return this.repository.find(query)
  }

  public async update(comment: Comment): Promise<Comment> {
    return this.repository.update(comment, comment)
  }

  fromDTO(dto: EntityForm): Comment {
    return undefined;
  }
}
