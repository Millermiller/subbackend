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

    all(): Promise<AxiosResponse<Passing[]>> {
      const { language } = store.getters
      return request.get(`/${language}/test`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/test/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      throw new Error('method not implemented')
    }

    delete(id: number|string): Promise<any> {
      return request.delete(`/test/${id}`)
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/test/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Passing[]>> {
      throw new Error('method not implemented')
    }
  }
}
