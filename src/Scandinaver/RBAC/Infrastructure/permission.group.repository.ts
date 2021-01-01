import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import { API } from '@/Scandinaver/RBAC/Infrastructure/api/permission.group.API'
import PermissionGroupAPI = API.PermissionGroupAPI

@Service()
export default class PermissionGroupRepository extends CommonRepository<PermissionGroup> {
  @Inject()
  protected api: PermissionGroupAPI

  async find(query: string): Promise<PermissionGroup[]> {
    return this.api.search(query).then(response => plainToClass(PermissionGroup, response.data))
  }
}
