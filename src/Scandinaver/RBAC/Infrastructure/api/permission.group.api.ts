import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'

export namespace API {
  @Service()
  export class PermissionGroupAPI extends BaseAPI<PermissionGroup> {
    protected type: ClassType<PermissionGroup> = PermissionGroup
    protected baseUrl = 'permission-group'
  }
}
