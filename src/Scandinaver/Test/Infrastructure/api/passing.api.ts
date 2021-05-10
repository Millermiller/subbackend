import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Passing from '@/Scandinaver/Test/Domain/Passing'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

export namespace API {
  @Service()
  export class PassingAPI extends BaseAPI<Passing> {
    protected type: ClassType<Passing> = Passing
    protected baseUrl: string = 'test'

    all(): Promise<AxiosResponse<Passing[]>> {
      const { language } = store.getters
      return request.get(`/${language}/test`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      throw new Error('method not implemented')
    }

    delete(id: number|string): Promise<any> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Passing[]>> {
      throw new Error('method not implemented')
    }
  }
}
