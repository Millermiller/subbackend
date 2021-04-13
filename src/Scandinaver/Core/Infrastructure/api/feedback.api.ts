import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Feedback } from '@/Scandinaver/Core/Domain/Contract/IFeedbackForm'

export namespace API {
  @Service()
  export class FeedbackAPI extends BaseAPI<Feedback> {
    protected type: ClassType<Feedback> = Feedback

    all(): Promise<AxiosResponse<Feedback[]>> {
      throw new Error('Method not implemented.')
    }

    create(data: any): Promise<AxiosResponse<Feedback>> {
      throw new Error('Method not implemented.')
    }

    delete(id: number | string): Promise<any> {
      throw new Error('Method not implemented.')
    }

    one(id: number): Promise<AxiosResponse<Feedback>> {
      throw new Error('Method not implemented.')
    }

    search(data: any): Promise<AxiosResponse<Feedback[]>> {
      throw new Error('Method not implemented.')
    }

    update(id: number | string, data: any): Promise<AxiosResponse<Feedback>> {
      throw new Error('Method not implemented.')
    }
  }
}
