import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Page from '@/Scandinaver/Pages/Domain/Page'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class MetaAPI extends BaseAPI<Page> {
    protected type: ClassType<Page> = Page

    all(): Promise<AxiosResponse<Page[]>> {
      return request.get('/meta')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/meta/${id}`)
    }

    create(data: any): Promise<AxiosResponse<Page>> {
      throw new Error('Method not implemented.')
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/meta/${id}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/meta/${id}`)
    }

    search(query: string): Promise<AxiosResponse<Page[]>> {
      return request.get(`/meta/search?q=${query}`)
    }
  }
}
