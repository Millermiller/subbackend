import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Log from '@/Scandinaver/Dashboard/Domain/Log'

export namespace API {
  @Service()
  export class LogAPI{
    all(): Promise<AxiosResponse> {
      return request.get(`/log`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/log/${id}`)
    }

    load(id: number): Promise<AxiosResponse<Log>> {
      return request.get(`/log/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse<Log>> {
      return request.put(`/log/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse> {
      return request.get(`/log/search?q=${query}`)
    }
  }
}
