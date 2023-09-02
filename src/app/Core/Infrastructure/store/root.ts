import { Getters, Mutations, Actions, Module, Context } from 'vuex-smart-module'
import { Store } from 'vuex'
import { textModule } from '@/app/Translate/Infrastructure/store'
import { userModule } from '@/app/Core/Infrastructure/store/user'
import { testModule } from '@/app/Asset/Infrastructure/store/test'
import { assetModule } from '@/app/Asset/Infrastructure/store/asset'
import { puzzleModule } from '@/app/Puzzle/Infrastructure/store'
import { dashboardModule } from '@/app/Dashboard/Infrastructure/store'
import { rbacModule } from '@/app/RBAC/Infrastructure/store'
import Language from '@/app/Languages/Domain/Language'
import { BehaviorSubject } from 'rxjs'

// State
class State {
  fullscreenLoading: boolean = false
  sites: any = []
  currentsite = {}
  domain = ''
  info = {}
  backdrop = 0
  rightMenuOpen = false
  showDictionary = true
  intro: any = []
  language: Language = new Language()
  isLanguageLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
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

  get language(): Language {
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

  setLanguage(language: Language) {
    this.state.language = language
    if (this.state.isLanguageLoaded.value === false) {
      this.state.isLanguageLoaded.next(true)
    }
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

  languageAsync(): Promise<Language> {
    return new Promise((resolve, reject) => {
      this.state.isLanguageLoaded.subscribe((data) => {
        if (data === true && this.state.language.id) {
          resolve(this.state.language)
        }
      })
    });
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
