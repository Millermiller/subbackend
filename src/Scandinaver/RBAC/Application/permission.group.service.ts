import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import { PermissionGroupForm } from '@/Scandinaver/RBAC/Domain/PermissionGroupForm'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import PermissionGroupRepository
  from '@/Scandinaver/RBAC/Infrastructure/permission.group.repository'

@Service()
export default class PermissionGroupService extends BaseService<PermissionGroup> {
  @Inject()
  private permissionGroupRepository: PermissionGroupRepository

  create(input: PermissionGroupForm): Promise<PermissionGroup> | PermissionGroup {
    const permission = new PermissionGroup()
    permission.name = input.name
    permission.slug = input.slug
    permission.description = input.description
    return this.permissionGroupRepository.create(permission.toDTO())
  }

  async getAll(): Promise<PermissionGroup[]> {
    return this.permissionGroupRepository.all()
  }

  async getOne(id: number): Promise<PermissionGroup> {
    return this.permissionGroupRepository.one(id)
  }

  async destroy(role: PermissionGroup) {
    return this.permissionGroupRepository.delete(role.getId())
  }

  async search(query: string): Promise<PermissionGroup[]> {
    return this.permissionGroupRepository.find(query)
  }

  async update(id: number, data: PermissionGroupForm): Promise<PermissionGroup> {
    return this.permissionGroupRepository.update(id, data)
  }
}
