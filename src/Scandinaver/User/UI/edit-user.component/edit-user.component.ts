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
  private userService: UserService

  @Inject()
  private roleService: RoleService

  private user: User = new User()
  private date: Date = new Date()
  private roles: Role[] = []
  private loading: boolean = false

  async mounted() {
    await this.load(Number(this.$route.params.id))
  }

  async load(id: number) {
    this.loading = true
    this.user = await this.userService.getOne(id)
    this.roles = await this.roleService.getAll()
    this.loading = false
  }

  back() {
    this.$router.go(-1)
  }

  async save() {
    this.user.active_to = this.date.toDateString()
    await this.userService.update(this.user)
    this.$router.go(-1)
  }
}
