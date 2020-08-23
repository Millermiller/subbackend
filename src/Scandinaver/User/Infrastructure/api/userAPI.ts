import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import User from '@/Scandinaver/User/Domain/User'

export namespace API {
  @Service()
  export class UserAPI {
    all(): Promise<AxiosResponse<User[]>> {
      return request.get(`/users`)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/users/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/users/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/users/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<User[]>> {
      return request.get(`/users/search?q=${query}`)
    }
  }
}
