import { BaseService } from '@/app/Core/Application/base.service'
import Post from '@/app/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import PostRepository from '@/app/Blog/Infrastructure/post.repository'
import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

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

  public async get(filters: FiltersData): Promise<PaginatedResponse<Post>> {
    return this.repository.paginate(filters)
  }

  public async destroy(post: Post): Promise<void> {
    return this.repository.delete(post)
  }

  public async search(query: string): Promise<Post[]> {
    return this.repository.find(query)
  }

  public async update(post: Post, data: any): Promise<Post> {
    return this.repository.update(post, data)
  }
}
