import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import { API } from '@/Scandinaver/RBAC/Infrastructure/api/roleAPI'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import RoleAPI = API.RoleAPI

@Service()
export default class RoleRepository extends CommonRepository<Role> {
  @Inject()
  protected api: RoleAPI

  async find(query: string): Promise<Role[]> {
    return this.api.search(query).then(response => plainToClass(Role, response.data))
  }

  addPermission(role: Role, permission: Permission) {
    return this.api.attachPermission(role.getId(), permission.getId())
  }

  removePermission(role: Role, permission: Permission) {
    return this.api.detachPermission(role.getId(), permission.getId())
  }
}
