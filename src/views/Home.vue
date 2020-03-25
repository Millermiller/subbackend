<template lang="pug">
  .content.has-text-centered
    p
      img(width="200", src="~assets/logo.png", :alt="description")

    h1.is-title.is-bold {{ name.replace('-', ' ') }}

    p
      strong {{ description }}
      a(:href="homepage") Live Demo

    p Supports Vue 2.0 and Bulma 0.3!
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Asset from '@/components/assets/Asset.vue'
import Card from '@/components/assets/Card.vue'
import Translate from '@/components/assets/Translate.vue'

  @Component({
    name: 'HomeView',
    components: {
      Asset,
      Card,
      Translate,
    },
  })
export default class HomeView extends Vue {
  // this.$store.state.pkg
}
</script>
