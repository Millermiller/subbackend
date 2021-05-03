import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class IntroAPI extends BaseAPI<Intro> {
    protected type: ClassType<Intro> = Intro
    protected baseUrl = 'intro'

    search(data: any): Promise<AxiosResponse<Intro[]>> {
      throw new Error('Method not implemented.')
    }
  }
}
