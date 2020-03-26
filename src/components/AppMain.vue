<template lang="pug">
  section.app-main
    .container.is-fluid.is-marginless.app-content
      levelbar
      transition(
        mode="out-in",
        enter-active-class="fadeIn",
        leave-active-class="fadeOut",
        appear)
        router-view.animated
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Levelbar from '@/components/Levelbar.vue'

  @Component({
    name: 'AppMain',
    components: {
      Levelbar,
    },

  })
export default class extends Vue {

}
</script>

<style lang="scss">

  .app-main {
    padding-top: 50px;
    margin-left: 180px;
    transform: translate3d(0, 0, 0);

  }

  .app-content {
    padding: 20px;
  }
</style>
