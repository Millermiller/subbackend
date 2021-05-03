import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class LogAPI extends BaseAPI<Log> {
    protected type: ClassType<Log> = Log
    protected baseUrl = 'log'

    create(data: any): Promise<AxiosResponse<Log>> {
      throw new Error('Method not implemented.')
    }
  }
}
