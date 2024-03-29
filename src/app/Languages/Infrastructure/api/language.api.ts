import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Language from '@/app/Languages/Domain/Language'
import { AxiosResponse } from 'axios'
import request from '@/utils/request'

export namespace API {
  @Service()
  export class LanguageAPI extends BaseAPI<Language> {
    protected readonly type: ClassType<Language> = Language
    protected readonly baseUrl = 'language'

    public async update(id: number|string, form: any): Promise<AxiosResponse<Language>> {
      return request.post(`/${this.baseUrl}/${id}`, form)
    }
  }
}
