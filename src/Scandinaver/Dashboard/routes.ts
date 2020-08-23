import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'dashboard',
    path: '/',
    meta: {
      icon: 'monitor-dashboard',
      menuitem: true,
      label: 'Dashboard',
      type: 'main'
    },
    component: require('@/Scandinaver/Dashboard/UI/dashboard.module').default,
    // component: () => import('@/modules/Dashboard/dashboard.module.vue'),
  },
]

export default routes
