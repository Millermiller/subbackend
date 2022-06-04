import { Card } from '@/Scandinaver/Asset/Domain/Card'
import { Transform, Type } from 'class-transformer'
import { AssetType } from '@/Scandinaver/Asset/Domain/Enum/AssetType'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import AssetDTO from '@/Scandinaver/Asset/Domain/DTO/AssetDTO'
import { Collection } from '@/Scandinaver/Core/Domain/Collection'
import i18n from '@/utils/i18n'
import Language from '@/Scandinaver/Languages/Domain/Language'

export class Asset extends Entity {
  private _id: number
  private _cards: Collection<Card>
  private _title: string
  private _type: AssetType
  private _level: number
  private _basic: boolean
  private _language: Language
  private _sorting: any

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

  get language(): Language {
    return this._language
  }

  @Type(() => Language)
  set language(value: Language) {
    this._language = value
  }

  get sorting(): any {
    return this._sorting
  }

  set sorting(value: any) {
    this._sorting = value
  }

  public calculateSorting(): number[]|null {
    return this._cards?.all().map(card => card.id)
  }

  get stringType(): string {
    switch (this._type) {
      case AssetType.WORDS:
        return i18n.tc('asset.words')
      case AssetType.SENTENCES:
        return i18n.tc('asset.sentences')
      case AssetType.PERSONAL:
        return i18n.tc('asset.personal')
      case AssetType.FAVORITES:
        return i18n.tc('asset.favourites')
      default:
        return 'undefined'
    }
  }

  toDTO(): AssetDTO {
    const dto = new AssetDTO()

    dto.language = this._language.letter
    dto.id = this._id
    dto.title = this._title
    dto.level = this._level
    dto.basic = this._basic
    dto.type = this._type
    dto.sorting = this.calculateSorting()

    return dto
  }
}
