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

    all(): Promise<AxiosResponse<Role[]>> {
      return request.get('/role')
    }

    one(id: number): Promise<AxiosResponse> {
      return request.get(`/role/${id}`)
    }

    create(form: any): Promise<AxiosResponse> {
      return request.post('/role/', form)
    }

    delete(entity: Role): Promise<any> {
      return request.delete(`/role/${entity.getId()}`)
    }

    update(entity: Role, form: any): Promise<AxiosResponse> {
      return request.put(`/role/${entity.getId()}`, form)
    }

    search(query: string): Promise<AxiosResponse<Role[]>> {
      return request.get(`/role/search?q=${query}`)
    }

    attachPermission(role: number | string, permission: number | string) {
      return request.post(`/role/${role}/${permission}`)
    }

    detachPermission(role: number | string, permission: number | string) {
      return request.delete(`/role/${role}/${permission}`)
    }
  }
}
