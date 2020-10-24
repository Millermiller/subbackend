import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Category extends Entity {
  id: number
  name: string

  getId(): number | string {
    return this.id
  }
}
