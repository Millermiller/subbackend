import { Inject, Service } from 'typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import PuzzleRepository from '@/Scandinaver/Puzzle/Infrastructure/puzzle.repository'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Service()
export default class PuzzleService extends BaseService<Puzzle> {
  @Inject()
  private readonly repository: PuzzleRepository

  public async create(data: any): Promise<Puzzle> {
    const puzzle = new Puzzle()
    puzzle.text = data.text
    puzzle.translate = data.translate
    return this.repository.create(puzzle)
  }

  public async getPuzzles(): Promise<Puzzle[]> {
    const { language } = store.getters
    return this.repository.allByLanguage(language)
  }

  public async destroy(puzzle: Puzzle): Promise<void> {
    return this.repository.delete(puzzle)
  }
}
