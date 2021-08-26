import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import { PermissionGroupForm } from '@/Scandinaver/RBAC/Domain/PermissionGroupForm'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import PermissionGroupRepository
  from '@/Scandinaver/RBAC/Infrastructure/permission.group.repository'

@Service()
export default class PermissionGroupService extends BaseService<PermissionGroup> {
  @Inject()
  private readonly permissionGroupRepository: PermissionGroupRepository

  public fromDTO(dto: PermissionGroupForm): PermissionGroup {
    const permissionGroup = new PermissionGroup()
    permissionGroup.id = dto.id || 0
    permissionGroup.name = dto.name
    permissionGroup.slug = dto.slug
    permissionGroup.description = dto.description
    return permissionGroup
  }

  public async create(input: PermissionGroupForm): Promise<PermissionGroup> {
    const permission = new PermissionGroup()
    permission.name = input.name
    permission.slug = input.slug
    permission.description = input.description
    return this.permissionGroupRepository.create(permission.toDTO())
  }

  public async getAll(): Promise<PermissionGroup[]> {
    return this.permissionGroupRepository.all()
  }

  public async getOne(id: number): Promise<PermissionGroup> {
    return this.permissionGroupRepository.one(id)
  }

  public async destroy(role: PermissionGroup): Promise<void> {
    return this.permissionGroupRepository.delete(role)
  }

  public async search(query: string): Promise<PermissionGroup[]> {
    return this.permissionGroupRepository.find(query)
  }

  public async update(group: PermissionGroup, data: PermissionGroupForm): Promise<PermissionGroup> {
    return this.permissionGroupRepository.update(group, data)
  }
}
