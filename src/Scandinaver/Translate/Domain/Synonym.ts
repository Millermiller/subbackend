import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Synonym extends Entity {
  id: number
  value: string

  getId(): number | string {
    return this.id;
  }
}
