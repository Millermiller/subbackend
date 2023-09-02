import { Mutations } from 'vuex-smart-module'
import State from '@/app/Core/Infrastructure/store/user/state'
import { IUser } from '@/app/Core/Domain/User'

export default class UserMutations extends Mutations<State> {
  public setUser(user: IUser): void {
    this.state.user.avatar = user.avatar
    this.state.user.email = user.email
    this.state.user.id = user.id
    this.state.user.login = user.login
  }

  public resetUser(): void {
    this.state.user.id = 0
    this.state.user.authenticated = false
    this.state.user.avatar = ''
    this.state.user.active = false
    this.state.user.active_to = ''
    this.state.user.login = ''
    this.state.user.email = ''
  }

  public setAuth(auth: boolean): void {
    this.state.user.authenticated = auth
  }

  public setActiveTo(date: string): void {
    this.state.user.active_to = date
  }

  public setActive(active: boolean): void {
    this.state.user.active = active
  }

  public setPlan(plan: any): void {
    this.state.user.plan = plan
  }
}
