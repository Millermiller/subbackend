import { Service } from 'typedi'
import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { store } from '@/app/Core/Infrastructure/store'

export namespace API {
  @Service()
  export class DashboardApi {
    public async load(language: string): Promise<AxiosResponse> {
      return request.get('/dashboard', {
        params: {
          lang: store.getters.language,
        },
      })
    }
  }
}
