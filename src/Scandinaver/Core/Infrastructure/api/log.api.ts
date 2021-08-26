import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class LogAPI extends BaseAPI<Log> {
    protected readonly type: ClassType<Log> = Log
    protected readonly baseUrl = 'log'

    public async create(data: any): Promise<AxiosResponse<Log>> {
      throw new Error('Method not implemented.')
    }
  }
}
