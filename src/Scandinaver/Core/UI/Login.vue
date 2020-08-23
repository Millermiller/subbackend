<template>
  <div>
    loginpage
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'

@Component({
  name: 'Login',
  components: {},
})
export default class Login extends Vue {}
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
