import { Entity } from '@/app/Core/Domain/Contract/Entity'

export default class Piece extends Entity {
  word: string

  constructor(word: string) {
    super();
    this.word = word
  }

  getId(): string {
    return this.word
  }

  toDTO(): any {
    return {}
  }
}
