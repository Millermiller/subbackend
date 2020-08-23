import { Getters, Mutations, Actions, Module, Context } from 'vuex-smart-module'
import { Store } from 'vuex'
import app from '@/Scandinaver/Core/Infrastructure/store/app'
import asset from '@/store/modules/asset'

class State {
  language: string = 'is'
}

class CommonGetters extends Getters<State> {
  get language():string {
    return this.state.language
  }
}

class CommonMutations extends Mutations<State> {}

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
