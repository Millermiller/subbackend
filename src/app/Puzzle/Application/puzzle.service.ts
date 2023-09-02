import { Inject, Service } from 'typedi'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'
import PuzzleRepository from '@/app/Puzzle/Infrastructure/puzzle.repository'
import { BaseService } from '@/app/Core/Application/base.service'
import { store } from '@/app/Core/Infrastructure/store'
import { PuzzleForm } from '@/app/Puzzle/Domain/PuzzleForm'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class PuzzleService extends BaseService<Puzzle> {
  @Inject()
  private readonly repository: PuzzleRepository

  public async get(filtersData: FiltersData): Promise<PaginatedResponse<Puzzle>> {
    return this.repository.paginate(filtersData)
  }

  public async create(data: PuzzleForm): Promise<Puzzle> {
    data.language = store.getters.language
    return this.repository.create(data)
  }

  update(puzzle: Puzzle, data: PuzzleForm): Promise<Puzzle> {
    return this.repository.update(puzzle, data)
  }

  public async destroy(puzzle: Puzzle): Promise<void> {
    return this.repository.delete(puzzle)
  }
}
