import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class PlanAPI extends BaseAPI<Plan> {
    protected type: ClassType<Plan>

    all(): Promise<AxiosResponse<Plan[]>> {
      return request.get('/plan')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/plan/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.put('/plan', form)
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/plan/${id}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/plan/${id}`)
    }

    search(query: string): Promise<AxiosResponse<Plan[]>> {
      return request.get(`/plan/search?q=${query}`)
    }
  }
}
