import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class User extends Entity {
  id: number
  active_to: string

  getId(): number | string {
    return this.id;
  }
}
