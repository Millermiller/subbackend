import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Setting } from '@/app/Settings/Domain/Setting'

export namespace API {
  @Service()
  export class SettingsAPI extends BaseAPI<Setting> {
    protected readonly type: ClassType<Setting> = Setting
    protected readonly baseUrl = 'setting'

    public async saveAll(data: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/`, data)
    }
  }
}
