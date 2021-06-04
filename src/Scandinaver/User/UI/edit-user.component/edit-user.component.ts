import { Component, Vue } from 'vue-property-decorator';
import User from '@/Scandinaver/User/Domain/User'
import { Inject } from 'vue-typedi'
import UserService from '@/Scandinaver/User/Application/user.service'
import RoleService from '@/Scandinaver/RBAC/Application/role.service'
import Role from '@/Scandinaver/RBAC/Domain/Role'

@Component({
  components: {},
})
export default class EditUserComponent extends Vue {
  @Inject()
  private readonly userService: UserService

  @Inject()
  private readonly roleService: RoleService

  public user: User = new User()
  public date: Date = new Date()
  public roles: Role[] = []
  public loading: boolean = false

  async mounted(): Promise<void> {
    await this.load(Number(this.$route.params.id))
  }

  private async load(id: number): Promise<void> {
    this.loading = true
    this.user = await this.userService.getOne(id)
    this.roles = await this.roleService.getAll()
    this.loading = false
  }

  public back(): void {
    this.$router.go(-1)
  }

  public async save(): Promise<void> {
    this.user.active_to = this.date.toDateString()
    await this.userService.update(this.user)
    this.$router.go(-1)
  }
}
