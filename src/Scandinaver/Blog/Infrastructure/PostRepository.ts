import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Post from '@/Scandinaver/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Blog/Infrastructure/api/articleAPI'
import ArticleAPI = API.ArticleAPI
import { plainToClass } from 'class-transformer'

@Service()
export default class PostRepository extends BaseRepository<Post> {

  @Inject()
  private api: ArticleAPI

  async all(): Promise<Post[]> {
    return this.api.all().then(response => plainToClass(Post, response.data))
  }

  async delete(entity: Post): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<Post> {
    return this.api.load(id).then(response => plainToClass(Post, response.data))
  }

  async save(entity: Post): Promise<Post> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Post, response.data))
  }

  async find(query: string): Promise<Post[]> {
    return this.api.search(query).then(response => plainToClass(Post, response.data))
  }
}
