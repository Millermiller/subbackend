import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'

export namespace API {
  @Service()
  export class ForvoAPI {
    public async getAudio(id: number): Promise<AxiosResponse<{count: number, all: number}>> {
      return request.post(`/forvo/${id}`)
    }
  }
}
