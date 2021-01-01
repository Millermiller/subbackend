import { Getters, Mutations, Actions, Module, Context } from 'vuex-smart-module'
import { Store } from 'vuex'
import { textModule } from '@/Scandinaver/Translate/Infrastructure/store'
import { userModule } from '@/Scandinaver/Core/Infrastructure/store/user'
import { testModule } from '@/Scandinaver/Asset/Infrastructure/store/test'
import { assetModule } from '@/Scandinaver/Asset/Infrastructure/store/asset'
import { puzzleModule } from '@/Scandinaver/Puzzle/Infrastructure/store'
import { dashboardModule } from '@/Scandinaver/Dashboard/Infrastructure/store'
import { rbacModule } from '@/Scandinaver/RBAC/Infrastructure/store'

// State
class State {
  fullscreenLoading: boolean = false
  sites = []
  currentsite = {}
  domain = ''
  info = {}
  backdrop = 0
  rightMenuOpen = false
  showDictionary = true
  intro = []
  language: string = ''
}

// Getters
// Extend 'Getters' class with 'FooState' type
class CommonGetters extends Getters<State> {
  get fullscreenLoading(): boolean {
    return this.state.fullscreenLoading
  }

  get sites() {
    return this.state.sites
  }

  get currentsite() {
    return this.state.currentsite
  }

  get backdrop() {
    return this.state.backdrop
  }

  get language(): string {
    return this.state.language
  }
}

// Mutations
// Extend 'Mutations' class with 'FooState' type
class CommonMutations extends Mutations<State> {
  setFullscreenLoading(loading: boolean): void {
    this.state.fullscreenLoading = loading
  }

  setBackdrop(data: number): void {
    this.state.backdrop = data
  }

  setMenuOpen(data: boolean): void {
    this.state.rightMenuOpen = data
  }

  setSites(sites: any) {
    this.state.sites = sites
  }

  setCurrentSite(site: any) {
    this.state.currentsite = site
  }

  setDomain(domain: string) {
    this.state.domain = domain
  }

  setLanguage(language: string) {
    this.state.language = language
  }
}

class CommonActions extends Actions<State, CommonGetters, CommonMutations, CommonActions> {
  userstore!: Context<typeof userModule>
  assetstore!: Context<typeof assetModule>
  textstore!: Context<typeof textModule>
  puzzleStore!: Context<typeof puzzleModule>
  dashboardStore!: Context<typeof dashboardModule>

  $init(store: Store<any>): void {
    this.userstore = userModule.context(store)
    this.assetstore = assetModule.context(store)
    this.textstore = textModule.context(store)
    this.puzzleStore = puzzleModule.context(store)
    this.dashboardStore = dashboardModule.context(store)
  }

  reloadStore() {

  }

  toggleBackdrop() {
    if (this.state.backdrop === 0 && this.state.rightMenuOpen) this.commit('setBackdrop', 1)
    else this.commit('setBackdrop', 0)
  }

  toggleMenuOpen() {
    this.commit('setMenuOpen', false)
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
    userModule,
    assetModule,
    textModule,
    testModule,
    puzzleModule,
    dashboardModule,
    rbacModule,
  },
})
