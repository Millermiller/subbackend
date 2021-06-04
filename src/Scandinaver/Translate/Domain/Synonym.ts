import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Synonym extends Entity {
  private _id: number
  private _value: string

  getId(): number | string {
    return this.id;
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
}
