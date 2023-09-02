import { Inject, Service } from 'typedi'
import { API } from './api/puzzle.api'
import { plainToClass } from 'class-transformer'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'
import PuzzleAPI = API.PuzzleAPI
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'

@Service()
export default class PuzzleRepository extends CommonRepository<Puzzle> {
  @Inject()
  protected api: PuzzleAPI

  async one(id: number): Promise<Puzzle> {
    throw new Error('method not implemented')
  }

  async allByLanguage(language: string): Promise<Puzzle[]> {
    return this.api.getPuzzles(language).then(response => plainToClass(Puzzle, response.data))
  }
}
