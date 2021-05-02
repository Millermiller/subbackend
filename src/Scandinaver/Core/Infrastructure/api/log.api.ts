import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class LogAPI extends BaseAPI<Log> {
    protected type: ClassType<Log> = Log
    protected baseUrl = 'log'

    all(): Promise<AxiosResponse<Log[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    one(id: number): Promise<AxiosResponse<Log>> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    update(id: number, form: any): Promise<AxiosResponse<Log>> {
      return request.put(`/${this.baseUrl}/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }

    create(data: any): Promise<AxiosResponse<Log>> {
      throw new Error('Method not implemented.')
    }
  }
}
