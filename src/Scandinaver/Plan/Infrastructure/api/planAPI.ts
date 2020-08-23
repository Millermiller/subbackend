import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Plan from '@/Scandinaver/Plan/Domain/Plan'

export namespace API {
  @Service()
  export class PlanAPI {
    all(): Promise<AxiosResponse<Plan[]>> {
      return request.get(`/plan`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/plan/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/plan/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/plan/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Plan[]>> {
      return request.get(`/plan/search?q=${query}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.put(`/plan`, form)
    }
  }
}
