import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import CategoryDTO from '@/Scandinaver/Blog/Domain/CategoryDTO'

export default class Category extends Entity {
  private _id: number
  private _title: string

  get id(): number {
    return this._id
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

  getId(): number | string {
    return this._id
  }

  toDTO(): CategoryDTO {
    const dto = new CategoryDTO()

    dto.id = this._id
    dto.title = this._title

    return dto
  }
}
