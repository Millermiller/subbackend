import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import Permission from '@/app/RBAC/Domain/Permission'
import { API } from './api/permission.api'
import PermissionAPI = API.PermissionAPI

@Service()
export default class PermissionRepository extends CommonRepository<Permission> {
  @Inject()
  protected readonly api: PermissionAPI
}
