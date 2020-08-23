<template lang="pug">
  #app
    navbar(:show="true")
    sidebar
    app-main
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Navbar from '@/Scandinaver/Core/UI/Navbar.vue'
import Sidebar from '@/Scandinaver/Core/UI/Sidebar.vue'
import AppMain from '@/Scandinaver/Core/UI/AppMain.vue'

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
}
</script>

<style lang="scss">
//  @import "./assets/scss/main.scss";
</style>
