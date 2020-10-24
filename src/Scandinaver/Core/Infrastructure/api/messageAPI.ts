import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Message from '@/Scandinaver/Dashboard/Domain/Message'

export namespace API {
  @Service()
  export class MessageAPI {
    all(): Promise<AxiosResponse<Message[]>> {
      return request.get('/message')
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/message/${id}`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/message/${id}`)
    }

    save(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/message/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse> {
      return request.get(`/message/search?q=${query}`)
    }

    read(id: number): Promise<AxiosResponse> {
      return request.post(`/message/read?${id}`)
    }
  }
}
