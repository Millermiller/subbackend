import axios, { AxiosResponse } from 'axios'
import ILoginForm from '@/Scandinaver/Core/Domain/Contract/ILoginForm'
import { Service } from 'typedi'
import { deserialize } from 'json-api-deserialize'

export interface ILoginData {
  state: any
  message: string
  token: string
}

export namespace API {
  @Service()
  export class UserAPI {
    public static login(data: ILoginForm): Promise<AxiosResponse<ILoginData>> {
      const request = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        timeout: 5000,
      })
      return request.post('/login', data)
    }

    public static logout(token: string): Promise<AxiosResponse> {
      const request = axios.create({
        baseURL: process.env.VUE_APP_BASE_API || 'https://api.scandinaver.org',
        timeout: 5000,
        headers: {
          post: {
            Authorization: token,
          },
        },
      })
      return request.post('/logout')
    }

    public static fetch(token: string): Promise<AxiosResponse> {
      const request = axios.create({
        baseURL: process.env.VUE_APP_BASE_API || 'https://api.scandinaver.org',
        timeout: 5000,
        headers: {
          get: {
            Authorization: token,
          },
        },
      })
      request.interceptors.response.use(response => ({
        ...response,
        ...deserialize(response.data),
      }), error => Promise.reject(error));
      return request.get('/me')
    }
  }
}
