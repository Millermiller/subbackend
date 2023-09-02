import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import Role from '@/app/RBAC/Domain/Role'
import RoleService from '@/app/RBAC/Application/role.service'
import { RoleForm } from '@/app/RBAC/Domain/RoleForm'
import Permission from '@/app/RBAC/Domain/Permission'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListRolesComponent extends CRUDComponent<Role, RoleForm> {
  @Inject()
  protected readonly service: RoleService

  public search: string = ''

  public async removePermission(role: Role, permission: Permission): Promise<void> {
    await this.service.detachPermission(role, permission)
    await this.load()
  }

  public async find(): Promise<void> {
    this.entities = await this.service.search(this.search)
  }

  protected buildForm(): RoleForm {
    return new RoleForm();
  }
}
