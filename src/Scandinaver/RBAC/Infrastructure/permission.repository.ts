import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { API } from './api/permission.api'
import PermissionAPI = API.PermissionAPI

@Service()
export default class PermissionRepository extends CommonRepository<Permission> {
  @Inject()
  protected readonly api: PermissionAPI
}
