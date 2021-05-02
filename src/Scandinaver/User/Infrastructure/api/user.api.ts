import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import User from '@/Scandinaver/User/Domain/User'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class UserAPI extends BaseAPI<User> {
    protected type: ClassType<User> = User
    protected baseUrl = 'user'

    all(): Promise<AxiosResponse<User[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/`, form)
    }

    update(id: number|string, data: any): Promise<AxiosResponse<User>> {
      return request.put(`/${this.baseUrl}/${id}`, data)
    }

    delete(id: number|string): Promise<any> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    search(query: string): Promise<AxiosResponse<User[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }
  }
}
