declare module 'vue-user' {
  import { PluginFunction } from 'vue'
  import { IUser } from '@/app/Core/Domain/User'

  const install: PluginFunction<{}>

  module 'vue/types/vue' {
    interface VueConstructor {
      $user: IUser
    }
    interface Vue {
      $user: IUser
    }
  }
}
