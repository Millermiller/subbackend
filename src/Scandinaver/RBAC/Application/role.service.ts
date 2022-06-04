import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import RoleRepository from '@/Scandinaver/RBAC/Infrastructure/role.repository'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class RoleService extends BaseService<Role> {
  @Inject()
  private readonly roleRepository: RoleRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<Role>> {
    return this.roleRepository.paginate(filters)
  }

  public async create(input: RoleForm): Promise<Role> {
    const role = new Role()
    role.name = input.name
    role.slug = input.slug
    role.description = input.description
    return this.roleRepository.create(role.toDTO())
  }

  public async update(role: Role, form: RoleForm): Promise<Role> {
    return this.roleRepository.update(role, form)
  }

  public async destroy(role: Role) {
    return this.roleRepository.delete(role)
  }

  public async getOne(id: number): Promise<Role> {
    return this.roleRepository.one(id)
  }

  public async search(query: string): Promise<Role[]> {
    return this.roleRepository.find(query)
  }

  public attachPermission(role: Role, permission: Permission) {
    return this.roleRepository.addPermission(role, permission)
  }

  public detachPermission(role: Role, permission: Permission) {
    return this.roleRepository.removePermission(role, permission)
  }
}
