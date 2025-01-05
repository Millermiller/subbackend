import { BaseService } from '@/app/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import PermissionRepository from '@/app/RBAC/Infrastructure/permission.repository'
import Permission from '@/app/RBAC/Domain/Permission'
import { PermissionForm } from '@/app/RBAC/Domain/PermissionForm'
import PermissionGroup from '@/app/RBAC/Domain/PermissionGroup'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class PermissionService extends BaseService<Permission> {
  @Inject()
  private readonly permissionRepository: PermissionRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<Permission>> {
    return this.permissionRepository.paginate(filters)
  }

  public async create(permissionForm: PermissionForm): Promise<Permission> {
    return this.permissionRepository.create(permissionForm)
  }

  public async update(permission: Permission, data: PermissionForm): Promise<Permission> {
    return this.permissionRepository.update(permission, data)
  }

  public async destroy(role: Permission): Promise<void> {
    return this.permissionRepository.delete(role)
  }
}
