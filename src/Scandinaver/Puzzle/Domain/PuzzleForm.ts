import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'

export class PuzzleForm extends EntityForm<Puzzle> {
  text: string
  translate: string
  language: string

  public fromDTO(): Puzzle {
    const puzzle = new Puzzle()
    puzzle.id = this.id
    puzzle.text = this.text
    puzzle.translate = this.translate
    puzzle.language = this.language
    return puzzle
  }
}
