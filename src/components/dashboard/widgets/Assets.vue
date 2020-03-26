<template lang="pug">
  .tile.is-parent
    article.tile.is-child.box
      div#nprogress(v-if="loading")
        .spinner-icon
      p.title {{assets}}
      p.subtitle Словарей
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Assets',
})
export default class Assets extends Vue {

}
</script>
