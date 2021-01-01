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

    all(): Promise<AxiosResponse<User[]>> {
      return request.get('/user')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/user/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post('/user/', form)
    }

    update(id: number|string, data: any): Promise<AxiosResponse<User>> {
      return request.put(`/user/${id}`, data)
    }

    delete(id: number|string): Promise<any> {
      return request.delete(`/user/${id}`)
    }

    search(query: string): Promise<AxiosResponse<User[]>> {
      return request.get(`/user/search?q=${query}`)
    }
  }
}
