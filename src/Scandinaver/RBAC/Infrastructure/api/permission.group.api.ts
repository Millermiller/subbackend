import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'

export namespace API {
  @Service()
  export class PermissionGroupAPI extends BaseAPI<PermissionGroup> {
    protected type: ClassType<PermissionGroup> = PermissionGroup

    all(): Promise<AxiosResponse<PermissionGroup[]>> {
      return request.get('/permission-group')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/permission-group/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post('/permission-group/', form)
    }

    delete(id: number|string): Promise<any> {
      return request.delete(`/permission-group/${id}`)
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/permission-group/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<PermissionGroup[]>> {
      return request.get(`/permission-group/search?q=${query}`)
    }
  }
}
