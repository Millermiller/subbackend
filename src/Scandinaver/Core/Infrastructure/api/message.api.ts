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
    protected baseUrl = 'message'

    all(): Promise<AxiosResponse<Message[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    delete(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(data: any): Promise<AxiosResponse<Message>> {
      throw new Error('Method not implemented.')
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }

    read(id: number): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/read?${id}`)
    }
  }
}
