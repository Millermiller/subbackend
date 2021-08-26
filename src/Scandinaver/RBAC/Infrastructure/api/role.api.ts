import request from '@/utils/request'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class RoleAPI extends BaseAPI<Role> {
    protected readonly type: ClassType<Role> = Role
    protected readonly baseUrl = 'role'

    public async attachPermission(role: number | string, permission: number | string) {
      return request.post(`/${this.baseUrl}/${role}/${permission}`)
    }

    public async detachPermission(role: number | string, permission: number | string) {
      return request.delete(`/${this.baseUrl}/${role}/${permission}`)
    }
  }
}
