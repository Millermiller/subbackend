<template lang="pug">
  footer.footer
    div.container
      div.content.has-text-centered
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

  @Component({
    name: 'FooterBar',
    components: {

    },
  })
export default class extends Vue {

}
</script>

<style lang="scss">

  .footer {
    margin-left: 180px;

    .social a {
      border-bottom: none !important;
    }

    .fa.fa-heart {
      color: red;
    }
  }
</style>
