import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'

export namespace API {
  @Service()
  export class PermissionAPI extends BaseAPI<Permission> {
    protected readonly type: ClassType<Permission> = Permission
    protected readonly baseUrl = 'permission'
  }
}
