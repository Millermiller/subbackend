<template lang="pug">
  section.app-main(:class="{'is-marginless': !auth }")
    .container.is-fluid.is-marginless.app-content

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
import FooterBar from '@/Scandinaver/Core/UI/FooterBar.vue'

@Component({
  name: 'AppMain',
  components: { FooterBar }
})
export default class extends Vue {
  get auth(): boolean {
    return this.$store.getters.auth
  }
}
</script>

<style lang="scss">
.app-main {
  padding-top: 50px;
  margin-left: 220px;
  transform: translate3d(0, 0, 0);
}

.app-content {
  padding: 20px;
}
</style>
