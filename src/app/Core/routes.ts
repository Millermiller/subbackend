import Login from '@/app/Core/UI/Login.vue'
import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { LoginService } from '@/app/Core/Application/login.service'
import { permissions } from '@/permissions/permission.type'

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
      exact: true,
      type: 'main',
      menuitem: true,
      title: 'page401',
      noCache: true,
      icon: 'monitor-dashboard',
      permission: permissions.VIEW_DASHBOARD,
      label: i18n.t('dashboard'),
    },
    component: () => import('@/app/Dashboard/UI/dashboard.module.vue'),
    beforeEnter: requireAuth,
  },
  {
    name: 'messages',
    path: '/messages',
    meta: {
      permission: permissions.VIEW_MESSAGES,
      icon: 'message-settings-outline',
      menuitem: true,
      type: 'main',
      label: i18n.t('messages'),
    },
    component: () => import('@/app/Core/UI/messages.module.vue'),
    beforeEnter: requireAuth,
  },
]

export default routes
