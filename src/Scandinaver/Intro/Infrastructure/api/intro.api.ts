import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class IntroAPI extends BaseAPI<Intro> {
    protected type: ClassType<Intro> = Intro

    all(): Promise<AxiosResponse<Intro[]>> {
      return request.get('/intro')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/intro/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post('/intro/', form)
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/intro/${id}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/intro/${id}`)
    }

    search(data: any): Promise<AxiosResponse<Intro[]>> {
      throw new Error('Method not implemented.')
    }
  }
}
