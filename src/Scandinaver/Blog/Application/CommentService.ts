import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import CommentRepository from '@/Scandinaver/Blog/Infrastructure/comment.repository'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class CommentService extends BaseService<Comment> {
  @Inject()
  private readonly repository: CommentRepository

  public async create(input: any): Promise<Comment> {
    return new Comment()
  }

  public async getAll(filters: FiltersData): Promise<PaginatedResponse<Comment[]>> {
    return this.repository.paginate(filters)
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
