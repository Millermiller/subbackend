import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import { Service } from 'typedi'

export namespace API {
  @Service()
  export class PuzzleAPI {
    getPuzzles(): Promise<AxiosResponse<Puzzle[]>> {
      return request.get('/puzzle')
    }

    processPuzzle(puzzle: Puzzle): Promise<AxiosResponse> {
      return request.put(`/puzzle/${puzzle.id}`)
    }

    all(): Promise<AxiosResponse> {
      return request.get(`/puzzle`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/puzzle/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/puzzle/${id}`, form)
    }

    create(entity: Puzzle): Promise<AxiosResponse<Puzzle>> {
      return request.post('/puzzle', entity)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/puzzle/${id}`)
    }
  }
}
