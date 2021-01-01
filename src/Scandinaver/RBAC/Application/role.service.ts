import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleRepository from '@/Scandinaver/RBAC/Infrastructure/role.repository'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'

@Service()
export default class RoleService extends BaseService<Role> {
  @Inject()
  private roleRepository: RoleRepository

  create(input: RoleForm): Promise<Role> | Role {
    const role = new Role()
    role.name = input.name
    role.slug = input.slug
    role.description = input.description
    return this.roleRepository.create(role.toDTO())
  }

  async getAll(): Promise<Role[]> {
    return this.roleRepository.all()
  }

  async getOne(id: number): Promise<Role> {
    return this.roleRepository.one(id)
  }

  async destroy(role: Role) {
    return this.roleRepository.delete(role.getId())
  }

  async search(query: string): Promise<Role[]> {
    return this.roleRepository.find(query)
  }

  async update(roleId: number|string, role: RoleForm): Promise<Role> {
    return this.roleRepository.update(roleId, role)
  }

  attachPermission(role: Role, permission: Permission) {
    return this.roleRepository.addPermission(role, permission)
  }

  detachPermission(role: Role, permission: Permission) {
    return this.roleRepository.removePermission(role, permission)
  }
}
