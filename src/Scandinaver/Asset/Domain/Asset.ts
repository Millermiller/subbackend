import { Card } from '@/Scandinaver/Asset/Domain/Card'
import { Transform, Type } from 'class-transformer'
import { AssetType } from '@/Scandinaver/Asset/Domain/Enum/AssetType'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import AssetDTO from '@/Scandinaver/Asset/Domain/AssetDTO'
import { Collection } from '@/Scandinaver/Core/Domain/Collection'

export class Asset extends Entity {
  private _id: number
  private _cards: Collection<Card>
  private _title: string
  private _type: AssetType
  private _level: number
  private _basic: boolean

  @Type(() => Card)
  @Transform(value => new Collection(value), { toClassOnly: true })
  set cards(value: Collection<Card>) {
    this._cards = value
  }

  getId(): number {
    return this._id
  }

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

  get cards(): Collection<Card> {
    return this._cards
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
