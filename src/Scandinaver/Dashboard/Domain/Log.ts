import User from '@/Scandinaver/User/Domain/User'
import { Type } from 'class-transformer'
import Example from '@/Scandinaver/Asset/Domain/Example'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Log extends Entity {
  private _id: number
  private _message: string
  private _level: string
  private _extra: any
  private _owner: User
  private _created_at: Date

  @Type(() => Example)
  set owner(value: User) {
    this._owner = value
  }

  @Type(() => Date)
  set created_at(value: Date) {
    this._created_at = value
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

  get message(): string {
    return this._message
  }

  set message(value: string) {
    this._message = value
  }

  get level(): string {
    return this._level
  }

  set level(value: string) {
    this._level = value
  }

  get extra(): any {
    return this._extra
  }

  set extra(value: any) {
    this._extra = value
  }

  get owner(): User {
    return this._owner
  }

  get created_at(): Date {
    return this._created_at
  }

  toDTO(): any {
    return {}
  }
}
