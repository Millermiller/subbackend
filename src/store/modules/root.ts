import { Getters, Mutations, Actions, Module, Context } from 'vuex-smart-module'
import { Store } from 'vuex'
import app from '@/Scandinaver/Core/Infrastructure/store/app'
import asset from '@/store/modules/asset'
import { User } from '@/Scandinaver/Core/Domain/User'

class State {
  language: string = 'is'
  user = {
    id: 0,
    authenticated: false,
    avatar: '',
    active: false,
    active_to: '',
    login: '',
    email: '',
    plan: {
      name: '',
      id: '',
    },
  }
}

class CommonGetters extends Getters<State> {
  get language():string {
    return this.state.language
  }
}

class CommonMutations extends Mutations<State> {
  setUser(user: User) {
    this.state.user.avatar = user.avatar
    this.state.user.email = user.email
    this.state.user.id = user.id
    this.state.user.login = user.login
  }

  setLanguage(data: string) {
    this.state.language = data
  }
}

class CommonActions extends Actions<State, CommonGetters, CommonMutations, CommonActions> {
  appstore!: Context<typeof app>
  assetstore!: Context<typeof asset>

  $init(store: Store<any>): void {
    this.appstore = app.context(store)
    this.assetstore = asset.context(store)
  }
}

// Create a module with module asset classes
export const root = new Module({
  namespaced: false,
  state: State,
  getters: CommonGetters,
  mutations: CommonMutations,
  actions: CommonActions,
  modules: {
    app,
    asset,
  },
})
