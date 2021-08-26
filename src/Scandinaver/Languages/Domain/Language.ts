import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { LanguageForm } from '@/Scandinaver/Languages/Domain/LanguageForm'

export default class Language extends Entity {
  private _id: number
  private _title: string
  private _letter: string
  private _flag: string

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

  public toDTO(): LanguageForm {
    return {
      id: this._id,
      title: this._title,
      letter: this._letter,
      flag: this._flag,
    }
  }
}
