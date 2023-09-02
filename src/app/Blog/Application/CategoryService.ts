import { BaseService } from '@/app/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Category from '@/app/Blog/Domain/Category'
import CategoryRepository from '@/app/Blog/Infrastructure/category.repository'
import CategoryDTO from '@/app/Blog/Domain/CategoryDTO'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class CategoryService extends BaseService<Category> {
  @Inject()
  private readonly repository: CategoryRepository

  public async create(data: CategoryDTO): Promise<Category> {
    return this.repository.create(data)
  }

  public async get(filters: FiltersData): Promise<PaginatedResponse<Category>> {
    return this.repository.paginate(filters)
  }

  public async destroy(category: Category): Promise<void> {
    return this.repository.delete(category)
  }

  public async search(query: string): Promise<Category[]> {
    return this.repository.find(query)
  }

  public async update(category: Category, data: CategoryDTO): Promise<Category> {
    return this.repository.update(category, data)
  }
}
