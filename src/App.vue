<template lang="pug">
  #app
    b-loading(:is-full-page="true" :active="fullscreenLoading" :can-cancel="true")
    navbar(:show="true", v-if="auth")
    sidebar(v-if="auth")
    app-main
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Navbar from '@/Scandinaver/Core/UI/Navbar.vue'
import Sidebar from '@/Scandinaver/Core/UI/Sidebar.vue'
import AppMain from '@/Scandinaver/Core/UI/AppMain.vue'
import { permissions } from './permissions/permission.type'

@Component({
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
})
export default class extends Vue {
  beforeMount() {
    const { body } = document
    const WIDTH = 768
    const RATIO = 3
  }

  get fullscreenLoading(): boolean {
    return this.$store.getters.fullscreenLoading
  }

  get auth(): boolean {
    return this.$ability.can(permissions.ACCESS_ADMIN_PAGE) && this.$store.getters.auth
  }
}
</script>

<style lang="scss">
//  @import "./assets/scss/main.scss";
</style>
