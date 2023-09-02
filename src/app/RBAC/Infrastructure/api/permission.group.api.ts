import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import PermissionGroup from '@/app/RBAC/Domain/PermissionGroup'

export namespace API {
  @Service()
  export class PermissionGroupAPI extends BaseAPI<PermissionGroup> {
    protected readonly type: ClassType<PermissionGroup> = PermissionGroup
    protected readonly baseUrl = 'permission-group'
  }
}
