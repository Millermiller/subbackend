import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Puzzle/Infrastructure/api/puzzleAPI'
import { plainToClass } from 'class-transformer'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import PuzzleAPI = API.PuzzleAPI

@Service()
export default class PuzzleRepository extends BaseRepository<Puzzle> {
  @Inject()
  private api: PuzzleAPI

  async all(): Promise<Puzzle[]> {
    return this.api.all().then(response => plainToClass(Puzzle, response.data))
  }

  async one(id: number): Promise<Puzzle> {
    throw new Error('method not implemented')
  }

  async create(puzzle: Puzzle): Promise<Puzzle> {
    const { language } = store.getters
    return this.api.create(language, puzzle).then(response => plainToClass(Puzzle, response.data))
  }

  async update(entity: Puzzle, data: any): Promise<Puzzle> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Puzzle, response.data))
  }

  async delete(entity: Puzzle): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async allByLanguage(language: string): Promise<Puzzle[]> {
    return this.api.getPuzzles(language).then(response => plainToClass(Puzzle, response.data))
  }
}
