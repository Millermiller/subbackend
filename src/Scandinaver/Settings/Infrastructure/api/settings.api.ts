import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Setting } from '@/Scandinaver/Settings/Domain/Setting'

export namespace API {
  @Service()
  export class SettingsAPI extends BaseAPI<Setting> {
    protected type: ClassType<Setting> = Setting
    protected baseUrl = 'setting'

    all(): Promise<AxiosResponse<Setting[]>> {
      return request.get(`/${this.baseUrl}`)
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/`, form)
    }

    delete(id: number|string): Promise<any> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/${id}`, form)
    }

    search(data: any): Promise<AxiosResponse<Setting[]>> {
      return Promise.resolve(undefined);
    }

    saveAll(data: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/`, data)
    }
  }
}
