import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { ItemForm } from '@/Scandinaver/Statistic/Domain/ItemForm'

export class Item extends Entity {
  private _id: number
  private _type: string

  getId(): number | string {
    return this._id;
  }

  set id(value: number) {
    this._id = value
  }

  get type(): string {
    return this._type
  }

  set type(value: string) {
    this._type = value
  }

  toDTO(): ItemForm {
    return {
      id: this._id,
      type: this._type,
    }
  }
}
