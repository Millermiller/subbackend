<template lang="pug">
  section.hero.is-bold.app-navbar.animated(:class="{ slideInDown: show, slideOutDown: !show }")
    .hero-head
      nav.nav
        .nav-left
          .nav-item
            b-field
              b-select(placeholder="Select a name", v-model="selectedLanguage")
                option(v-for="language in languages"
                :value="language.id"
                :key="language.id").
                  {{ language.title }}
          .nav-item
            a(:href="elasticLink" target="__blank") ElasticPanel
          a.nav-item.is-hidden-tablet(@click="toggleSidebar(!sidebar.opened)")
            i.fa.fa-bars(aria-hidden="true")

        .nav-center
          a.nav-item.hero-brand
            <!-- img(src="../assets/logo.png") -->
            span {{version}}

        .nav-right.is-flex
          a.nav-item(@click="logout()") {{$t('logout')}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { LoginService } from '@/app/Core/Application/login.service'
import { store } from '@/app/Core/Infrastructure/store'
import { version } from '../../../../package.json';
import { Inject } from 'vue-typedi'
import LanguageService from '@/app/Languages/Application/language.service'
import { FiltersData } from '../Application/FiltersData';
import Language from '@/app/Languages/Domain/Language';

@Component({
  name: 'NavBarComponent',
})
export default class NavBarComponent extends Vue {
  @Inject()
  private service: LanguageService

  @Prop()
  public show: Boolean

  public version: string = `v.${version}`

  public languages: Language[] = []

  public selectedLanguage: number = 1

  public elasticLink = process.env.VUE_APP_ELASTIC_PANEL

  @Watch('selectedLanguage')
  private onChange(val: number): void {
    store.commit('setLanguage', this.languages.find(item => item.id === val))
  }

  async created(): Promise<void> {
    const data = await this.service.get(new FiltersData())
    this.languages = data.data
    const queryParams = this.$route.query
    if (queryParams.language) {
      const language = this.languages.find(item => item.letter === queryParams.language)
      this.selectedLanguage = language.id
      store.commit('setLanguage', language)
    } else {
      this.selectedLanguage = this.languages[0].id
      store.commit('setLanguage', this.languages[0])
    }
  }

  public logout(): void {
    store.commit('setFullscreenLoading', true)
    LoginService.logout()
    this.$router.push({ path: '/login' })
    store.commit('setFullscreenLoading', false)
  }
}
</script>

<style lang="scss">
  .app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

    .container {
      margin: auto 10px;
    }

    .nav-right {
      align-items: stretch;
      flex: 1;
      justify-content: flex-end;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .hero-brand {
    .vue {
      margin-left: 10px;
      color: #36AC70;
    }

    .admin {
      color: #28374B;
    }
  }
</style>
