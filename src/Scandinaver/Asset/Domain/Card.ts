import { Word } from '@/Scandinaver/Asset/Domain/Word'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { User } from '@/Scandinaver/Core/Domain/User'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Type } from 'class-transformer'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import Example from '@/Scandinaver/Asset/Domain/Example'
import CardForm from '@/Scandinaver/Asset/Domain/CardForm'

export class Card extends Entity {
  private _id!: number
  private _sentence: boolean
  private _favourite?: boolean
  private _asset: Asset
  private _word: Word
  private _translate!: Translate
  private _user: User
  private _examples: Example[] = []

  getId(): number | string {
    return this.id
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get sentence(): boolean {
    return this._sentence
  }

  set sentence(value: boolean) {
    this._sentence = value
  }

  get favourite(): boolean {
    return this._favourite
  }

  set favourite(value: boolean) {
    this._favourite = value
  }

  get asset(): Asset {
    return this._asset
  }

  set asset(value: Asset) {
    this._asset = value
  }

  @Type(() => Word)
  set word(value: Word) {
    this._word = value
  }

  get word(): Word {
    return this._word
  }

  get translate(): Translate {
    return this._translate
  }

  @Type(() => Translate)
  set translate(value: Translate) {
    this._translate = value
  }

  get user(): User {
    return this._user
  }

  @Type(() => User)
  set user(value: User) {
    this._user = value
  }

  get examples(): Example[] {
    return this._examples
  }

  @Type(() => Example)
  set examples(value: Example[]) {
    this._examples = value
  }

  get subject(): string {
    return this.word.getValue()
  }

  get value(): string {
    return this.translate.value
  }

  toDTO(): CardForm {
    return {
      id: this._id,
      word: this._word,
      translate: this._translate,
      user: this._user,
      examples: this._examples
    }
  }

  static fromDTO(dto: CardForm): Card {
    const card = new Card()
    card.id = dto.id
    card.word = dto.word
    card.translate = dto.translate
    card.examples = dto.examples
    return card
  }
}
