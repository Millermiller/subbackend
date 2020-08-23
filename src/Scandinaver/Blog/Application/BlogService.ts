import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Post from '@/Scandinaver/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import PostRepository from '@/Scandinaver/Blog/Infrastructure/PostRepository'

@Service()
export default class BlogService extends BaseService<Post> {

  @Inject()
  private repository: PostRepository

  create(input: any): Promise<Post> | Post {
    const post = new Post()
    return this.repository.save(post)
  }

  async getOne(id: number): Promise<Post> {
    return this.repository.one(id)
  }

  async getAll(): Promise<Post[]> {
    return this.repository.all()
  }

  async destroy(post: Post) {
    return this.repository.delete(post)
  }

  async search(query: string): Promise<Post[]> {
    return this.repository.find(query)
  }

  async update(post: Post): Promise<Post> {
    return this.repository.save(post)
  }
}
