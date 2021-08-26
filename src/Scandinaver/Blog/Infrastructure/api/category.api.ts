import { Service } from 'typedi'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class CategoryAPI extends BaseAPI<Category> {
    protected type: ClassType<Category> = Category
    protected baseUrl = 'category'
  }
}
