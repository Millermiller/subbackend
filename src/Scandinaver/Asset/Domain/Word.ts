import { User } from '@/Scandinaver/Core/Domain/User'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export class Word extends Entity{
  active!: boolean
  id!: number
  value!: string
  user: User
  audio: string

  constructor(value: string) {
    super();
    this.value = value
  }

  getValue(): string {
    return this.value
  }

  getId(): number | string {
    return this.id;
  }
}
