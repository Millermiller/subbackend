import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { LanguageForm } from '@/Scandinaver/Languages/Domain/LanguageForm'

export default class Language extends Entity {
  private _id: number
  private _title: string
  private _description: string
  private _letter: string
  private _flag: string
  private _image: string
  private _active: boolean

  getId(): number | string {
    return this._id;
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

  get letter(): string {
    return this._letter
  }

  set letter(value: string) {
    this._letter = value
  }

  get flag(): string {
    return this._flag
  }

  set flag(value: string) {
    this._flag = value
  }

  get image(): string {
    return this._image
  }

  set image(value: string) {
    this._image = value
  }
  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get active(): boolean {
    return this._active
  }

  set active(value: boolean) {
    this._active = value
  }

  public toDTO(): LanguageForm {
    const dto = new LanguageForm()

    dto.id = this._id
    dto.title = this._title
    dto.letter = this._letter
    dto.flag = this._flag
    dto.description = this._description
    dto.image = this._image
    dto.active = this._active

    return dto
  }
}
