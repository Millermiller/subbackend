import { Term } from '@/Scandinaver/Asset/Domain/Term'
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
  private _term: Term
  private _translate!: Translate
  private _user: User
  private _examples: Example[] = []

  @Type(() => Term)
  set term(value: Term) {
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
  set example(value: Example[]) {
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

  get term(): Term {
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
    const dto = new CardForm()

    dto.id = this._id
    dto.term = this._term.toDTO()
    dto.translate = this._translate.toDTO()
    dto.user = this._user
    dto.examples = this._examples.map(item => item.toDTO())

    return dto
  }
}
