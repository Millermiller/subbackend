import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Page from '@/Scandinaver/Pages/Domain/Page'

export namespace API {
  @Service()
  export class MetaAPI {
    all(): Promise<AxiosResponse<Page[]>> {
      return request.get(`/meta`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/meta/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/meta/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/meta/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Page[]>> {
      return request.get(`/meta/search?q=${query}`)
    }
  }
}
