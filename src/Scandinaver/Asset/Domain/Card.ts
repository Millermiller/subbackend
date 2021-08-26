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
  private _term: Word
  private _translate!: Translate
  private _user: User
  private _examples: Example[] = []

  @Type(() => Word)
  set term(value: Word) {
    this._term = value
  }

  @Type(() => Translate)
  set translate(value: Translate) {
    this._translate = value
  }

  @Type(() => User)
  set user(value: User) {
    this._user = value
  }

  @Type(() => Example)
  set examples(value: Example[]) {
    this._examples = value
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

  get term(): Word {
    return this._term
  }

  get translate(): Translate {
    return this._translate
  }

  get user(): User {
    return this._user
  }

  get examples(): Example[] {
    return this._examples
  }

  get subject(): string {
    return this.term.getValue()
  }

  get value(): string {
    return this.translate.getValue()
  }

  toDTO(): CardForm {
    return {
      id: this._id,
      term: this._term,
      translate: this._translate,
      user: this._user,
      examples: this._examples,
    }
  }
}
