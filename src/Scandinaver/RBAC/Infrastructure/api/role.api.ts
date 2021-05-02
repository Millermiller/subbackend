import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class RoleAPI extends BaseAPI<Role> {
    protected type: ClassType<Role> = Role
    protected baseUrl = 'role'

    all(): Promise<AxiosResponse<Role[]>> {
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

    search(query: string): Promise<AxiosResponse<Role[]>> {
      return request.get(`/${this.baseUrl}/search?q=${query}`)
    }

    attachPermission(role: number | string, permission: number | string) {
      return request.post(`/${this.baseUrl}/${role}/${permission}`)
    }

    detachPermission(role: number | string, permission: number | string) {
      return request.delete(`/${this.baseUrl}/${role}/${permission}`)
    }
  }
}
