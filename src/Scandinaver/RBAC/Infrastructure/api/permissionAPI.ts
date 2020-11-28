import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'

export namespace API {
  @Service()
  export class PermissionAPI extends BaseAPI<Permission> {
    protected type: ClassType<Permission> = Permission

    all(): Promise<AxiosResponse<Permission[]>> {
      return request.get('/permission')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/permission/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post('/permission/', form)
    }

    delete(entity: Permission): Promise<any> {
      return request.delete(`/permission/${entity.getId()}`)
    }

    update(entity: Permission, form: any): Promise<AxiosResponse> {
      return request.post(`/permission/${entity.getId()}`, form)
    }

    search(query: string): Promise<AxiosResponse<Permission[]>> {
      return request.get(`/permission/search?q=${query}`)
    }
  }
}
