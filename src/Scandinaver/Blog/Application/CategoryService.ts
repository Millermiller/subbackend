import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Category from '@/Scandinaver/Blog/Domain/Category'
import CategoryRepository from '@/Scandinaver/Blog/Infrastructure/category.repository'
import CategoryDTO from '@/Scandinaver/Blog/Domain/CategoryDTO'

@Service()
export default class CategoryService extends BaseService<Category> {
  @Inject()
  private repository: CategoryRepository

  async create(input: any): Promise<Category> {
    const category = new Category();
    category.title = input
    return this.repository.create(category.toDTO())
  }

  async getAll(): Promise<Category[]> {
    return this.repository.all()
  }

  async destroy(category: Category) {
    return this.repository.delete(category)
  }

  async search(query: string): Promise<Category[]> {
    return this.repository.find(query)
  }

  async update(category: Category, data: CategoryDTO): Promise<Category> {
    return this.repository.update(category, data)
  }
}
