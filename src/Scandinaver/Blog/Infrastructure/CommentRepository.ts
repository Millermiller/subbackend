import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import { API } from '@/Scandinaver/Blog/Infrastructure/api/commentsAPI'
import CommentsAPI = API.CommentsAPI

@Service()
export default class CommentRepository extends BaseRepository<Comment> {

  @Inject()
  private api: CommentsAPI

  async all(): Promise<Comment[]> {
    return this.api.all().then(response => plainToClass(Comment, response.data))
  }

  async delete(entity: Comment): Promise<any> {
    return this.api.destroy(entity.getId())
  }

  async one(id: number): Promise<Comment> {
    return this.api.load(id).then(response => plainToClass(Comment, response.data))
  }

  async save(entity: Comment): Promise<Comment> {
    return this.api.save(entity.getId(), entity).then(response => plainToClass(Comment, response.data))
  }

  async find(query: string): Promise<Comment[]> {
    return this.api.search(query).then(response => plainToClass(Comment, response.data))
  }
}
