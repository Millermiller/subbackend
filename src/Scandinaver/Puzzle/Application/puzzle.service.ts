import { Inject, Service } from 'typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import PuzzleRepository from '@/Scandinaver/Puzzle/Infrastructure/puzzle.repository'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'

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
    const puzzles = await this.repository.all()
    return puzzles.map(puzzle => puzzle.setActive(false))
  }

  async destroy(puzzle: Puzzle) {
    return this.repository.delete(puzzle)
  }
}
