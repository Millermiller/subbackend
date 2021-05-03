import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { AxiosResponse } from 'axios'
import request from '@/utils/request'

export namespace API {
  @Service()
  export class LanguageAPI extends BaseAPI<Language> {
    protected type: ClassType<Language> = Language
    protected baseUrl = 'language'

    update(id: number|string, form: any): Promise<AxiosResponse<Language>> {
      return request.post(`/${this.baseUrl}/${id}`, form)
    }
  }
}
