import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import { Service } from 'typedi'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class PuzzleAPI extends BaseAPI<Puzzle> {
    protected type: ClassType<Puzzle> = Puzzle
    protected baseUrl = 'puzzle'

    getPuzzles(language: string): Promise<AxiosResponse<Puzzle[]>> {
      return request.get(`/${this.baseUrl}`, {
        params: {
          lang: store.getters.language,
        },
      })
    }

    search(data: any): Promise<AxiosResponse<Puzzle[]>> {
      throw new Error('method not implemented')
    }
  }
}
