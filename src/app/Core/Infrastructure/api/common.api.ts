import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Responses } from '../../Domain/Contract/Responses'

export namespace API {
  @Service()
  export class CommonAPI {
    public static async getState(): Promise<AxiosResponse<Responses.GetStateResponse>> {
      return request.get('/state')
    }

    public async loadDashboard(): Promise<AxiosResponse> {
      return request.get('/dashboard')
    }

    public async sendMail(): Promise<AxiosResponse> {
      return request.post('/send')
    }
  }
}
