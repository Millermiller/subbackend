import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Comment extends Entity {
  private id: number;
  private text: string;

  getId(): number {
    return this.id;
  }

  toDTO(): any {
    return {}
  }
}
