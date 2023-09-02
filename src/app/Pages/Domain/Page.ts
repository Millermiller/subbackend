import { Entity } from '@/app/Core/Domain/Contract/Entity'

export default class Page extends Entity {
  private _id: number
  private _url: string
  private _title: string
  private _description: string
  private _keywords: string

  getId(): number | string {
    return this._id
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get url(): string {
    return this._url
  }

  set url(value: string) {
    this._url = value
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get keywords(): string {
    return this._keywords
  }

  set keywords(value: string) {
    this._keywords = value
  }

  toDTO(): any {
    return {}
  }
}
