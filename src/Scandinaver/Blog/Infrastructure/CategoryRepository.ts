import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { API } from '@/Scandinaver/Blog/Infrastructure/api/categoryAPI'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import CategoryAPI = API.CategoryAPI

@Service()
export default class CategoryRepository extends CommonRepository<Category> {
  @Inject()
  protected api: CategoryAPI

  async find(query: string): Promise<Category[]> {
    return this.api.search(query).then(response => plainToClass(Category, response.data))
  }
}
