import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Post from '@/Scandinaver/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import PostRepository from '@/Scandinaver/Blog/Infrastructure/post.repository'

@Service()
export default class BlogService extends BaseService<Post> {
  @Inject()
  private readonly repository: PostRepository

  public create(post: Post): Promise<Post> | Post {
    return this.repository.create(post)
  }

  public async getOne(id: number): Promise<Post> {
    return this.repository.one(id)
  }

  public async getAll(): Promise<Post[]> {
    return this.repository.all()
  }

  public async destroy(post: Post): Promise<void> {
    return this.repository.delete(post)
  }

  public async search(query: string): Promise<Post[]> {
    return this.repository.find(query)
  }

  public async update(post: Post): Promise<Post> {
    return this.repository.update(post, post)
  }
}
