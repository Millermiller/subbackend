import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Page extends Entity {
  id: number
  url: string
  title: string
  description: string
  keywords: string

  getId(): number | string {
    return this.id
  }
}
