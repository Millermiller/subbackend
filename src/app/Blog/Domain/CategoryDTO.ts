import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Category from '@/app/Blog/Domain/Category'

export default class CategoryDTO extends EntityForm<Category> {
  title: string

  public fromDTO(): Category {
    const category = new Category()
    category.id = this.id
    category.title = this.title
    return category
  }
}
