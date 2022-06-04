import { Component } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import UserService from '@/Scandinaver/User/Application/user.service'
import BaseWidgetComponent from '@/Scandinaver/Core/UI/BaseWidgetComponent'
import User from '@/Scandinaver/User/Domain/User'

@Component({
  components: {},
})
export default class UsersWidgetComponent extends BaseWidgetComponent<User> {
  @Inject()
  protected service: UserService
  protected title: string = this.$root.$tc('users')
  protected watchLanguage: boolean = true;
}
