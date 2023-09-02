import { Inject, Service } from 'typedi'
import Category from '@/app/Blog/Domain/Category'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { API } from './api/category.api'
import CategoryAPI = API.CategoryAPI

@Service()
export default class CategoryRepository extends CommonRepository<Category> {
  @Inject()
  protected api: CategoryAPI
}
