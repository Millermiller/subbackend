import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import PermissionGroup from '@/app/RBAC/Domain/PermissionGroup'
import { API } from './api/permission.group.api'
import PermissionGroupAPI = API.PermissionGroupAPI

@Service()
export default class PermissionGroupRepository extends CommonRepository<PermissionGroup> {
  @Inject()
  protected readonly api: PermissionGroupAPI
}
