import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { API } from '@/Scandinaver/RBAC/Infrastructure/api/permissionAPI'
import PermissionAPI = API.PermissionAPI

@Service()
export default class PermissionRepository extends CommonRepository<Permission> {
  @Inject()
  protected api: PermissionAPI

  async find(query: string): Promise<Permission[]> {
    return this.api.search(query).then(response => plainToClass(Permission, response.data))
  }
}
