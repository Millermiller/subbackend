import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import Category from './Category'

export default class Post extends Entity {
  id: number
  title: string
  anonse: string
  content: string
  category: Category
  status: string

  getId(): number | string {
    return this.id
  }

  toDTO(): any {
    return {}
  }
}
