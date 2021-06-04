import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { API } from './api/role.api'
import RoleAPI = API.RoleAPI

@Service()
export default class RoleRepository extends CommonRepository<Role> {
  @Inject()
  protected readonly api: RoleAPI

  public async addPermission(role: Role, permission: Permission) {
    return this.api.attachPermission(role.getId(), permission.getId())
  }

  public async removePermission(role: Role, permission: Permission) {
    return this.api.detachPermission(role.getId(), permission.getId())
  }
}
