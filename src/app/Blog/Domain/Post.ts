import { Entity } from '@/app/Core/Domain/Contract/Entity'
import Category from './Category'
import { PostDTO } from '@/app/Blog/Domain/PostDTO'

export default class Post extends Entity {
  id: number
  title: string = null
  announce: string = null
  content: string = null
  category: Category = new Category()
  status: boolean = null
  comment_status: boolean = null

  getId(): number | string {
    return this.id
  }

  toDTO(): PostDTO {
    return new PostDTO(
      this.title,
      Number(this.category.id),
      Number(this.status),
      this.content,
      this.announce,
    )
  }
}
