<template lang="pug">
  section.hero.is-bold.app-navbar.animated(:class="{ slideInDown: show, slideOutDown: !show }")
    .hero-head
      nav.nav
        .nav-left
          .nav-item
            b-field
              b-select(placeholder="Select a name", v-model="selectedLanguage")
                option(v-for="language in languages"
                :value="language.label"
                :key="language.label").
                  {{ language.name }}

          a.nav-item.is-hidden-tablet(@click="toggleSidebar(!sidebar.opened)")
            i.fa.fa-bars(aria-hidden="true")

        .nav-center
          a.nav-item.hero-brand
            <!-- img(src="../assets/logo.png") -->
            span {{version}}

        .nav-right.is-flex
          a.nav-item(@click="logout") {{$t('logout')}}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import {version} from '../../../../package.json';
import { LoginService } from '@/Scandinaver/Core/Application/login.service'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  name: 'NavBarComponent'
})
export default class NavBarComponent extends Vue{

  @Prop()
  private show: Boolean

  private version: string = `v.${version}`

  private languages = [
    {
      'label': 'is',
      'name': 'Исландский'
    },
    {
      'label': 'sw',
      'name': 'Шведский'
    },
  ];

  private selectedLanguage: string = 'is'

  @Watch('selectedLanguage')
  private onChange(val: any) {
    store.commit('setLanguage', val)
  }

  created() {
    store.commit('setLanguage', this.selectedLanguage)
  }

  logout() {
    store.commit('setFullscreenLoading', true)
    LoginService.logout().then((response) => {
      this.$router.push({ path: '/login' })
      store.commit('setFullscreenLoading', false)
    })
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
