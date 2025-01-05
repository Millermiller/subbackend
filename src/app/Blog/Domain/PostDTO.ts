import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Post from '@/app/Blog/Domain/Post'

export class PostDTO extends EntityForm<Post> {
  title: string
  categoryId: number
  status: number
  content: string
  announce: string

  constructor(title?: string, categoryId?: number, status?: number, content?: string, announce?: string) {
    super()
    this.title = title
    this.categoryId = categoryId
    this.status = status
    this.content = content
    this.announce = announce
  }

  fromDTO(): Post {
    return undefined;
  }
}
