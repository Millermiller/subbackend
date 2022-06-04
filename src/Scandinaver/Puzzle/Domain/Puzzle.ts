import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import Piece from '@/Scandinaver/Puzzle/Domain/Piece'
import { Collection } from '@/Scandinaver/Core/Domain/Collection'
import { LanguageForm } from '@/Scandinaver/Languages/Domain/LanguageForm'
import { PuzzleForm } from '@/Scandinaver/Puzzle/Domain/PuzzleForm'

export class Puzzle extends Entity {
  private _id!: number
  active: boolean
  success: boolean
  private _text: string
  private _translate: any
  private _language: any
  pieces: Collection<Piece>

  getId(): number | string {
    return this._id
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get text(): string {
    return this._text
  }

  set text(value: string) {
    this._text = value
  }
  get translate(): any {
    return this._translate
  }

  set translate(value: any) {
    this._translate = value
  }

  get language(): any {
    return this._language
  }

  set language(value: any) {
    this._language = value
  }

  generate(): Puzzle {
    const slices = this.translate.split(' ')
    const pieces: Piece[] = []
    slices.forEach((item: string) => {
      pieces.push(new Piece(item))
    })
    this.pieces = new Collection<Piece>(pieces)
    return this
  }

  get count(): number {
    return this.pieces.count()
  }

  setActive(active: boolean) {
    this.active = active
    return this
  }

  public toDTO(): PuzzleForm {
    const dto = new PuzzleForm()

    dto.id = this._id
    dto.text = this._text
    dto.translate = this._translate
    dto.language = ''

    return dto
  }
}
