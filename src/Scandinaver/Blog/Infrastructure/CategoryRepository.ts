import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Post from '@/Scandinaver/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { API } from '@/Scandinaver/Blog/Infrastructure/api/categoryAPI'
import CategoryAPI = API.CategoryAPI

@Service()
export default class CategoryRepository extends BaseRepository<Category> {

  @Inject()
  private api: CategoryAPI

  async all(): Promise<Category[]> {
    return this.api.all().then(response => plainToClass(Category, response.data))
  }

  async delete(entity: Category): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<Category> {
    return this.api.load(id).then(response => plainToClass(Category, response.data))
  }

  async save(entity: Category): Promise<Category> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Category, response.data))
  }

  async find(query: string): Promise<Category[]> {
    return this.api.search(query).then(response => plainToClass(Category, response.data))
  }
}
