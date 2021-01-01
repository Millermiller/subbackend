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

    delete(id: number|string): Promise<any> {
      return request.delete(`/permission/${id}`)
    }

    update(id: number|string, form: any): Promise<AxiosResponse> {
      return request.put(`/permission/${id}`, form)
    }

    search(query: string): Promise<AxiosResponse<Permission[]>> {
      return request.get(`/permission/search?q=${query}`)
    }
  }
}
