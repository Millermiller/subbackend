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
    protected readonly type: ClassType<Puzzle> = Puzzle
    protected readonly baseUrl = 'puzzle'

    public async getPuzzles(language: string): Promise<AxiosResponse<Puzzle[]>> {
      return request.get(`/${this.baseUrl}`, {
        params: {
          lang: store.getters.language,
        },
      })
    }

    public async search(data: any): Promise<AxiosResponse<Puzzle[]>> {
      throw new Error('method not implemented')
    }
  }
}
