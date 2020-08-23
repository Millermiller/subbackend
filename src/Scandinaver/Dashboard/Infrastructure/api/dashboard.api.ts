import { Service } from 'typedi'
import { AxiosResponse } from 'axios'
import request from '@/utils/request'

export namespace API {
  @Service()
  export class DashboardApi {
    load(): Promise<AxiosResponse> {
      return request.get(`/dashboard`)
    }
  }
}
