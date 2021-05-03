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

    attachPermission(role: number | string, permission: number | string) {
      return request.post(`/${this.baseUrl}/${role}/${permission}`)
    }

    detachPermission(role: number | string, permission: number | string) {
      return request.delete(`/${this.baseUrl}/${role}/${permission}`)
    }
  }
}
