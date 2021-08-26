import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { SettingForm } from '@/Scandinaver/Settings/Domain/SettingForm'

export class Setting extends Entity {
  private _id: number
  private _title: string
  private _slug: string
  private _type: string
  private _value: string|number|boolean

  getId(): number | string {
    return this._id;
  }

  set id(value: number) {
    this._id = value
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get slug(): string {
    return this._slug
  }

  set slug(value: string) {
    this._slug = value
  }

  get value(): string | number | boolean {
    return this._value
  }

  set value(value: string | number | boolean) {
    this._value = value
  }
  get type(): string {
    return this._type
  }

  set type(value: string) {
    this._type = value
  }

  isString(): boolean {
    return this._type === 'string'
  }

  isNumber(): boolean {
    return this._type === 'number'
  }

  isBoolean(): boolean {
    return this._type === 'boolean'
  }

  toDTO(): SettingForm {
    return {
      id: this._id,
      title: this._title,
      slug: this._slug,
      value: this._value,
      type: this._type
    }
  }
}
