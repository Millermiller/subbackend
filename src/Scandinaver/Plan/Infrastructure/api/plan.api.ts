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
    protected baseUrl = 'plan'

    all(): Promise<AxiosResponse<Plan[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}`, form)
    }

    update(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/${id}`, form)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    search(query: string): Promise<AxiosResponse<Plan[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }
  }
}
