import { Inject, Service } from 'typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import PuzzleRepository from '@/Scandinaver/Puzzle/Infrastructure/puzzle.repository'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { PuzzleForm } from '@/Scandinaver/Puzzle/Domain/PuzzleForm'

@Service()
export default class PuzzleService extends BaseService<Puzzle> {
  @Inject()
  private readonly repository: PuzzleRepository

  public fromDTO(dto: PuzzleForm): Puzzle {
    const puzzle = new Puzzle()
    puzzle.id = dto.id
    puzzle.text = dto.text
    puzzle.translate = dto.translate
    puzzle.language = dto.language
    return puzzle
  }

  public async create(data: PuzzleForm): Promise<Puzzle> {
    data.language = store.getters.language
    return this.repository.create(data)
  }

  public async getAll(): Promise<Puzzle[]> {
    const { language } = store.getters
    return this.repository.allByLanguage(language)
  }

  public async destroy(puzzle: Puzzle): Promise<void> {
    return this.repository.delete(puzzle)
  }

  update(puzzle: Puzzle, data: PuzzleForm): Promise<Puzzle> {
    return this.repository.update(puzzle, data)
  }
}
