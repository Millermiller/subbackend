import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { IntroForm } from '@/Scandinaver/Intro/Domain/IntroForm'

export default class Intro extends Entity {
  private _id: number
  private _page: string
  private _target: string
  private _content: string
  private _position: string
  private _headerText: string
  private _sort: number
  private _active: boolean
  getId(): number {
    return this._id;
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get page(): string {
    return this._page
  }

  set page(value: string) {
    this._page = value
  }

  get target(): string {
    return this._target
  }

  set target(value: string) {
    this._target = value
  }

  get content(): string {
    return this._content
  }

  set content(value: string) {
    this._content = value
  }

  get position(): string {
    return this._position
  }

  set position(value: string) {
    this._position = value
  }

  get headerText(): string {
    return this._headerText
  }

  set headerText(value: string) {
    this._headerText = value
  }

  get sort(): number {
    return this._sort
  }

  set sort(value: number) {
    this._sort = value
  }

  get active(): boolean {
    return this._active
  }

  set active(value: boolean) {
    this._active = value
  }

  toDTO(): IntroForm {
    return {
      id: this._id,
      page: this._page,
      target: this._target,
      content: this._content,
      position: this._position,
      headerText: this._headerText,
      sort: this._sort,
      active: this._active
    }
  }

  static fromDTO(dto: IntroForm): Intro {
    const intro = new Intro()
    intro.id = dto.id || undefined
    intro.page = dto.page
    intro.target = dto.target
    intro.content = dto.content
    intro.position = dto.position
    intro.headerText = dto.headerText
    intro.sort = dto.sort
    intro.active = dto.active

    return intro
  }
}
