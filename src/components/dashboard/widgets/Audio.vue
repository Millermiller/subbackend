<template lang="pug">
  .tile.is-parent
    article.tile.is-child.box
      div#nprogress(v-if="loading")
        .spinner-icon
      p.title {{audiofiles}}
      p.subtitle Аудиозаписей
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Audio',
})
export default class Audio extends Vue {

}
</script>
