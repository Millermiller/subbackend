import { Card } from '@/Scandinaver/Asset/Domain/Card'
import { Type } from 'class-transformer'
import { AssetType } from '@/Scandinaver/Asset/Domain/Enum/AssetType'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import AssetDTO from '@/Scandinaver/Asset/Domain/AssetDTO'

export class Asset extends Entity {
  private _cards: Card[]
  private _title: string
  private _type: AssetType
  private _level: number
  private _selected?: boolean
  private _count: number
  private _basic: boolean

  private _id: number

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  getId(): number {
    return this._id;
  }

  get level(): number {
    return this._level
  }

  set level(value: number) {
    this._level = value
  }
  get type(): AssetType {
    return this._type
  }

  set type(value: AssetType) {
    this._type = value
  }
  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get cards(): Card[] {
    return this._cards
  }

  @Type(() => Card)
  set cards(value: Card[]) {
    this._cards = value
  }

  get basic(): boolean {
    return this._basic
  }

  set basic(value: boolean) {
    this._basic = value
  }

  toDTO(): AssetDTO {
    return {
      language: '',
      id: this._id,
      title: this._title,
      level: this._level,
      basic: this._basic,
      type: this._type,
    }
  }
}
