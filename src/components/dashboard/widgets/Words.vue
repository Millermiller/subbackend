<template lang="pug">
  .tile.is-parent
    article.tile.is-child.box
      div#nprogress(v-if="loading")
        .spinner-icon
      p.title {{words}}
      p.subtitle Слов
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

  @Component({
    name: 'Words',
  })
export default class Words extends Vue {
    private count: number = 0
    private loading: boolean = false
}
</script>
