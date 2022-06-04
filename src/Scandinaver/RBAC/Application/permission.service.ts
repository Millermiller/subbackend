import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import PermissionRepository from '@/Scandinaver/RBAC/Infrastructure/permission.repository'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { PermissionForm } from '@/Scandinaver/RBAC/Domain/PermissionForm'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class PermissionService extends BaseService<Permission> {
  @Inject()
  private readonly permissionRepository: PermissionRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<Permission>> {
    return this.permissionRepository.paginate(filters)
  }

  public async create(input: PermissionForm): Promise<Permission> {
    const permission = new Permission()
    permission.name = input.name
    permission.slug = input.slug
    permission.description = input.description
    if (input.group) {
      permission.group = new PermissionGroup()
      permission.group.id = input.group
    }
    return this.permissionRepository.create(permission.toDTO())
  }

  public async update(permission: Permission, data: PermissionForm): Promise<Permission> {
    return this.permissionRepository.update(permission, data)
  }

  public async destroy(role: Permission): Promise<void> {
    return this.permissionRepository.delete(role)
  }
}
