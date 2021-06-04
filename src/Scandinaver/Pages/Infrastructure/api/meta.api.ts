import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Page from '@/Scandinaver/Pages/Domain/Page'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class MetaAPI extends BaseAPI<Page> {
    protected readonly type: ClassType<Page> = Page
    protected readonly baseUrl = 'meta'

    public async create(data: any): Promise<AxiosResponse<Page>> {
      throw new Error('Method not implemented.')
    }
  }
}
