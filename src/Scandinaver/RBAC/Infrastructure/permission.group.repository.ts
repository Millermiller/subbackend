import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import { API } from './api/permission.group.api'
import PermissionGroupAPI = API.PermissionGroupAPI

@Service()
export default class PermissionGroupRepository extends CommonRepository<PermissionGroup> {
  @Inject()
  protected readonly api: PermissionGroupAPI
}
