import { BaseService } from '@/app/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import { PermissionGroupForm } from '@/app/RBAC/Domain/PermissionGroupForm'
import PermissionGroup from '@/app/RBAC/Domain/PermissionGroup'
import PermissionGroupRepository
  from '@/app/RBAC/Infrastructure/permission.group.repository'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class PermissionGroupService extends BaseService<PermissionGroup> {
  @Inject()
  private readonly permissionGroupRepository: PermissionGroupRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<PermissionGroup>> {
    return this.permissionGroupRepository.paginate(filters)
  }

  public async create(input: PermissionGroupForm): Promise<PermissionGroup> {
    const permission = new PermissionGroup()
    permission.name = input.name
    permission.slug = input.slug
    permission.description = input.description
    return this.permissionGroupRepository.create(permission.toDTO())
  }

  public async update(group: PermissionGroup, data: PermissionGroupForm): Promise<PermissionGroup> {
    return this.permissionGroupRepository.update(group, data)
  }

  public async destroy(role: PermissionGroup): Promise<void> {
    return this.permissionGroupRepository.delete(role)
  }

  public async getOne(id: number): Promise<PermissionGroup> {
    return this.permissionGroupRepository.one(id)
  }

  public async search(query: string): Promise<PermissionGroup[]> {
    return this.permissionGroupRepository.find(query)
  }
}
