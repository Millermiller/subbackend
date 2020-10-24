import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import User from '@/Scandinaver/User/Domain/User'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'

export namespace API {
  @Service()
  export class UserAPI extends BaseAPI<User> {
    all(): Promise<AxiosResponse<User[]>> {
      return request.get('/users')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/users/${id}`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/users/${id}`)
    }
    create(form: any): Promise<AxiosResponse> {
      return request.post('/users/', form)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/users/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<User[]>> {
      return request.get(`/users/search?q=${query}`)
    }

    delete(entity: User): Promise<any> {
      throw new Error('method not implemented')
    }

    update(entity: User, data: any): Promise<AxiosResponse<User>> {
      throw new Error('method not implemented')
    }
  }
}
