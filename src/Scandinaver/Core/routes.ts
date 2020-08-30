import DashboardModule from '@/Scandinaver/Dashboard/UI/dashboard.module.vue'
import Login from '@/Scandinaver/Core/UI/Login.vue'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { LoginService } from '@/Scandinaver/Core/Application/login.service'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {},
    beforeEnter(to: any, from: any, next: any) {
      LoginService.checkAuth()
        .then(
          () => next({ name: 'MainPage' }),
          () => next(),
        )
        .catch(() => next())
    },
  },
  {
    path: '/',
    name: 'MainPage',
    meta: {
      title: 'page401',
      noCache: true,
    },
    component: () => import('@/Scandinaver/Dashboard/UI/dashboard.module.vue'),
    beforeEnter: requireAuth,
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
    beforeEnter: requireAuth,
  }
]

export default routes
