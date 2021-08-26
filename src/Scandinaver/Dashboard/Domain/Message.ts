import User from '@/Scandinaver/User/Domain/User'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Message extends Entity {
  private _id: number
  private _name: string
  private _readed: boolean
  private _subject: string
  private _user: User
  private _message: string
  private _createdAt: string

  public getId(): string | number {
    return this._id
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get readed(): boolean {
    return this._readed
  }

  set readed(value: boolean) {
    this._readed = value
  }

  get subject(): string {
    return this._subject
  }

  set subject(value: string) {
    this._subject = value
  }

  get user(): User {
    return this._user
  }

  set user(value: User) {
    this._user = value
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    this._message = value
  }

  get createdAt(): string {
    return this._createdAt
  }

  set createdAt(value: string) {
    this._createdAt = value
  }

  toDTO(): any {
    return {}
  }
}
