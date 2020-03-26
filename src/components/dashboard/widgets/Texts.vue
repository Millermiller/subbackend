<template lang="pug">
  .tile.is-parent
    article.tile.is-child.box
      div#nprogress(v-if="loading")
        .spinner-icon
      p.title {{texts}}
      p.subtitle Текстов
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
  @Component({
    name: 'Texts',
  })
export default class Texts extends Vue {

}
</script>
