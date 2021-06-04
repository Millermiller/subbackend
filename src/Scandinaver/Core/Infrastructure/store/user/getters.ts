import { Getters } from 'vuex-smart-module'
import State from '@/Scandinaver/Core/Infrastructure/store/user/state'

export default class UserGetters extends Getters<State> {
  get user() {
    return this.state.user
  }

  get avatar(): string {
    return this.state.user.avatar
  }

  get login(): string {
    return this.state.user.login
  }

  get email(): string {
    return this.state.user.email
  }

  get plan() {
    return this.state.user.plan
  }

  get active_to(): string {
    return this.state.user.active_to
  }

  get auth(): boolean {
    // TODO: сделать нормально
    return this.state.user && this.state.user.authenticated
  }

  get isActive(): boolean {
    return this.state.user.active
  }
}
