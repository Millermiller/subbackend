import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export class Translate implements Entity {
  private _id: number
  private _title: string
  private _image: string
  private _active!: boolean
  private _available: boolean
  private _text: string
  private _count: number
  private _synonyms: any[]
  private _extra: any[]
  private _published: boolean
  private _sentences: any[]
  private _description: string

  getId(): number {
    return this._id
  }

  publish() {
    this._published = true
  }

  unpublish() {
    this._published = false
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  get text(): string {
    return this._text
  }

  set text(value: string) {
    this._text = value
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get synonyms(): any[] {
    return this._synonyms
  }

  set synonyms(value: any[]) {
    this._synonyms = value
  }

  get extra(): any[] {
    return this._extra
  }

  set extra(value: any[]) {
    this._extra = value
  }

  get sentences(): any[] {
    return this._sentences
  }

  set sentences(value: any[]) {
    this._sentences = value
  }

  get image(): string {
    return this._image
  }

  set image(value: string) {
    this._image = value
  }

  isPublished() {
    return this._published
  }
}
