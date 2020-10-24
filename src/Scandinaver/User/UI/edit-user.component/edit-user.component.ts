import { Component, Vue } from 'vue-property-decorator';
import User from '@/Scandinaver/User/Domain/User'
import { Inject } from 'vue-typedi'
import UserService from '@/Scandinaver/User/Application/user.service'

@Component({
  components: {},
})
export default class EditUserComponent extends Vue {
  @Inject()
  private service: UserService

  private user: User = new User()
  private date: Date = new Date()

  mounted() {
    this.load(Number(this.$route.params.id))
  }

  async load(id: number) {
    this.user = await this.service.getOne(id)
  }

  back() {
    this.$router.go(-1)
  }

  async save() {
    this.user.active_to = this.date.toDateString()
    await this.service.update(this.user)
    this.$router.go(-1)
  }
}
