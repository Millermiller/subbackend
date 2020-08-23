declare module 'vue-notify' {
  import { BuefyNamespace } from 'buefy'
  module 'vue/types/vue' {
    interface VueConstructor {
      $buefy: BuefyNamespace
    }
    interface Vue {
      $buefy: BuefyNamespace
    }
  }
}
