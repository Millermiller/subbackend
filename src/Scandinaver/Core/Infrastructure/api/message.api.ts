import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class MessageAPI extends BaseAPI<Message> {
    protected type: ClassType<Message> = Message

    all(): Promise<AxiosResponse<Message[]>> {
      return request.get('/message')
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/message/${id}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/message/${id}`)
    }

    create(data: any): Promise<AxiosResponse<Message>> {
      throw new Error('Method not implemented.')
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
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
