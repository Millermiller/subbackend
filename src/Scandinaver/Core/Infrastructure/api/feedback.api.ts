import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Feedback } from '@/Scandinaver/Core/Domain/Contract/IFeedbackForm'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

export namespace API {
  @Service()
  export class FeedbackAPI extends BaseAPI<Feedback> {
    protected readonly type: ClassType<Feedback> = Feedback
    protected readonly baseUrl: string = 'feedback'

    public async all(): Promise<AxiosResponse<PaginatedResponse<Feedback>>> {
      throw new Error('Method not implemented.')
    }

    public async create(data: any): Promise<AxiosResponse<Feedback>> {
      throw new Error('Method not implemented.')
    }

    public async delete(id: number | string): Promise<any> {
      throw new Error('Method not implemented.')
    }

    public async one(id: number): Promise<AxiosResponse<Feedback>> {
      throw new Error('Method not implemented.')
    }

    public async search(data: any): Promise<AxiosResponse<Feedback[]>> {
      throw new Error('Method not implemented.')
    }

    public async update(id: number | string, data: any): Promise<AxiosResponse<Feedback>> {
      throw new Error('Method not implemented.')
    }
  }
}
