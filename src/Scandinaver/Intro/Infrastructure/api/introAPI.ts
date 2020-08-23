import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Intro from '@/Scandinaver/Intro/Domain/Intro'

export namespace API {
  @Service()
  export class IntroAPI{
    all(): Promise<AxiosResponse<Intro[]>> {
      return request.get('/intro')
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/intro/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/intro/${id}`, form)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/intro/${id}`)
    }
  }
}
