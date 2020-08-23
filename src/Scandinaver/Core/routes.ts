import DashboardModule from '@/Scandinaver/Dashboard/UI/dashboard.module.vue'
import Login from '@/Scandinaver/Core/UI/Login.vue'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    meta: {
      title: 'page401',
      noCache: true,
    },
    // component: DashboardModule,
    component: () => import('@/Scandinaver/Dashboard/UI/dashboard.module.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {},
    beforeEnter(to: any, from: any, next: any) {
      if (store.getters.auth) {
        next({ path: '/' })
      } else {
        next()
      }
    },
  },
  {
    name: 'messages',
    path: '/messages',
    meta: {
      icon: 'message-settings-outline',
      menuitem: true,
      type: 'main',
      label: i18n.t('messages'),
    },
    component: require('@/Scandinaver/Core/UI/messages.module.vue').default,
  }
]

export default routes
