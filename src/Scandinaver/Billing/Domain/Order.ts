import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export class Order extends Entity {
  getId(): number | string {
    return undefined;
  }

  toDTO(): any {
  }
}
