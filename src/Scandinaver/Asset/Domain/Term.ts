import { User } from '@/Scandinaver/Core/Domain/User'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import TermDTO from '@/Scandinaver/Asset/Domain/DTO/TermDTO'

export class Term extends Entity {
  private _id!: number
  private _active!: boolean
  private _value!: string
  private _user: User

  constructor(word: string) {
    super()
    this.value = word
  }

  getId(): number | string {
    return this.id
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get active(): boolean {
    return this._active
  }

  set active(value: boolean) {
    this._active = value
  }

  get value(): string {
    return this._value
  }

  set value(value: string) {
    this._value = value
  }

  get user(): User {
    return this._user
  }

  set user(value: User) {
    this._user = value
  }

  getValue(): string {
    return this.value
  }

  toDTO(): TermDTO {
    const dto = new TermDTO()

    dto.id = this._id
    dto.value = this._value

    return dto
  }
}
