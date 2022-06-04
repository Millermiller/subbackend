import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PermissionGroupService from '@/Scandinaver/RBAC/Application/permission.group.service'
import PermissionGroup from '@/Scandinaver/RBAC/Domain/PermissionGroup'
import { PermissionGroupForm } from '@/Scandinaver/RBAC/Domain/PermissionGroupForm'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListGroupsComponent extends CRUDComponent<PermissionGroup, PermissionGroupForm> {
  @Inject()
  protected readonly service: PermissionGroupService

  public search: string = ''

  protected buildForm(): PermissionGroupForm {
    return new PermissionGroupForm();
  }

  public async find(): Promise<void> {
    this.entities = await this.service.search(this.search)
  }
}
