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
    protected baseUrl = 'permission'

    all(): Promise<AxiosResponse<Permission[]>> {
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

    search(query: string): Promise<AxiosResponse<Permission[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }
  }
}
