import { Entity } from '@/app/Core/Domain/Contract/Entity'

export class Payment extends Entity {
  getId(): number | string {
    return undefined;
  }

  toDTO(): any {
  }
}
