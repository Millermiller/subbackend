import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'
import { Service } from 'typedi'
import { store } from '@/app/Core/Infrastructure/store'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

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

    public async all(filters: FiltersData): Promise<AxiosResponse<PaginatedResponse<Puzzle>>> {
      const existingFilter = filters.filter.filter(i => i.field === 'language.id')[0]
      if (existingFilter) {
        existingFilter.value = store.getters.language ? store.getters.language.id : 1
      } else {
        filters.filter.push({ field: 'language.id', value: store.getters.language.id, operator: 'eq' })
      }
      return request.get(`/${this.baseUrl}`, {
        params: {
          sort: filters.sort,
          filter: filters.filter,
          pageSize: filters.pageSize,
        },
      })
    }

    public async search(data: any): Promise<AxiosResponse<Puzzle[]>> {
      throw new Error('method not implemented')
    }
  }
}
