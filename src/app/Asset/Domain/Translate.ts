import { Entity } from '@/app/Core/Domain/Contract/Entity'
import TranslateDTO from '@/app/Asset/Domain/DTO/TranslateDTO'

export default class Translate extends Entity {
  private _id?: number
  private _value: string

  constructor(value: string) {
    super()
    this._value = value
  }

  getId(): any {
    return this._id
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get value(): string {
    return this._value
  }

  set value(value: string) {
    this._value = value
  }

  getValue(): string {
    return this.value
  }

  toDTO(): TranslateDTO {
    const dto = new TranslateDTO()

    dto.id = this._id
    dto.value = this._value

    return dto
  }
}
