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

    public async create(data: any): Promise<AxiosResponse<Message>> {
      throw new Error('Method not implemented.')
    }

    public async read(id: number): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/read?${id}`)
    }
  }
}
