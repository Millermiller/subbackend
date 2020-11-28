import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import PermissionRepository from '@/Scandinaver/RBAC/Infrastructure/permission.repository'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { PermissionForm } from '@/Scandinaver/RBAC/Domain/PermissionForm'

@Service()
export default class PermissionService extends BaseService<Permission> {
  @Inject()
  private permissionRepository: PermissionRepository

  create(input: PermissionForm): Promise<Permission> | Permission {
    const permission = new Permission()
    permission.title = input.title
    permission.slug = input.slug
    permission.description = input.description
    return this.permissionRepository.create(permission.toDTO())
  }

  async getAll(): Promise<Permission[]> {
    return this.permissionRepository.all()
  }

  async getOne(id: number): Promise<Permission> {
    return this.permissionRepository.one(id)
  }

  async destroy(role: Permission) {
    return this.permissionRepository.delete(role)
  }

  async search(query: string): Promise<Permission[]> {
    return this.permissionRepository.find(query)
  }

  async update(role: Permission): Promise<Permission> {
    return this.permissionRepository.update(role, role)
  }
}
