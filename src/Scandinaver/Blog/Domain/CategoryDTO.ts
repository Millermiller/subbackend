import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Category from '@/Scandinaver/Blog/Domain/Category'

export default class CategoryDTO extends EntityForm<Category> {
  title: string

  public fromDTO(): Category {
    const category = new Category()
    category.id = this.id
    category.title = this.title
    return category
  }
}
