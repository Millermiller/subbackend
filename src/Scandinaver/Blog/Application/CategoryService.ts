import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Category from '@/Scandinaver/Blog/Domain/Category'
import CategoryRepository from '@/Scandinaver/Blog/Infrastructure/category.repository'
import CategoryDTO from '@/Scandinaver/Blog/Domain/CategoryDTO'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class CategoryService extends BaseService<Category> {
  @Inject()
  private readonly repository: CategoryRepository

  public fromDTO(dto: CategoryDTO): Category {
    const category = new Category()
    category.id = dto.id
    category.title = dto.title
    return category
  }

  public async create(data: CategoryDTO): Promise<Category> {
    return this.repository.create(data)
  }

  public async getAll(filters: FiltersData): Promise<PaginatedResponse<Category>> {
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
