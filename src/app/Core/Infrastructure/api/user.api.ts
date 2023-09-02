import axios, { AxiosResponse } from 'axios'
import ILoginForm from '@/app/Core/Domain/Contract/ILoginForm'
import { Service } from 'typedi'
import request from '@/utils/request';

export interface ILoginData {
  state: any
  message: string
  token: string
  refreshToken: string
}

export namespace API {
  @Service()
  export class UserAPI {
    public static login(data: ILoginForm): Promise<AxiosResponse<ILoginData>> {
      return request.post('/login', data)
    }

    public static fetch(token: string): Promise<AxiosResponse> {
      return request.get('/me')
    }
  }
}
