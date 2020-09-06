import { Inject, Service } from 'typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import PuzzleRepository from '@/Scandinaver/Puzzle/Infrastructure/puzzle.repository'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Service()
export default class PuzzleService extends BaseService<Puzzle> {
  @Inject()
  private repository: PuzzleRepository

 // create(puzzle: Puzzle): Puzzle {
 //   puzzle.generate().pieces.shuffle()
 //   return puzzle
 // }

  async create(data: any): Promise<Puzzle> {
    const puzzle = new Puzzle()
    puzzle.text = data.text
    puzzle.translate = data.translate
    return await this.repository.save(puzzle)
  }

  async getPuzzles() {
    const language = store.getters.language
    return await this.repository.allByLanguage(language)
  }

  async destroy(puzzle: Puzzle) {
    return this.repository.delete(puzzle)
  }
}
