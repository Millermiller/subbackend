import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Intro from '@/app/Intro/Domain/Intro'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class IntroAPI extends BaseAPI<Intro> {
    protected readonly type: ClassType<Intro> = Intro
    protected readonly baseUrl = 'intro'

    public search(data: any): Promise<AxiosResponse<Intro[]>> {
      throw new Error('Method not implemented.')
    }
  }
}
