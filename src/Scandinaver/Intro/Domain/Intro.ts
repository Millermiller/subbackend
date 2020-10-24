import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Intro extends Entity {
  id: number

  getId(): number {
    return this.id;
  }
}
