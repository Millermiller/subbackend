import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import PassingForm from '@/Scandinaver/Test/Domain/PassingForm'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import User from '@/Scandinaver/User/Domain/User'
import { Type } from 'class-transformer'
import moment from 'moment'

export default class Passing extends Entity {
  private _id: number
  private _asset: Asset
  private _user: User
  private _completed: boolean
  private _percent: number
  private _time: number
  private _errors: string[]
  private _created: string

  @Type(() => Asset)
  set asset(value: Asset) {
    this._asset = value
  }

  @Type(() => User)
  set user(value: User) {
    this._user = value
  }

  getId(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value
  }

  set completed(value: boolean) {
    this._completed = value
  }

  get completed(): boolean {
    return this._completed
  }

  get percent(): number {
    return this._percent
  }

  get time(): number {
    return this._time
  }

  get formattedTime(): string {
    return moment.utc(this._time * 1000).format('HH:mm:ss')
  }

  set time(value: number) {
    this._time = value
  }

  set percent(value: number) {
    this._percent = value
  }


  get user(): User {
    return this._user
  }

  get asset(): Asset {
    return this._asset
  }

  get errors(): string[] {
    return this._errors
  }

  set errors(value: string[]) {
    this._errors = value
  }

  get created(): string {
    return this._created
  }

  set created(value: string) {
    this._created = value
  }

  toDTO(): PassingForm {
    const dto = new PassingForm()

    dto.id = this._id
    dto.completed = this._completed
    dto.errors = []
    dto.percent = this._percent

    return dto
  }
}
