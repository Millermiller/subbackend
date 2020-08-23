import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'settings',
    path: '/settings',
    meta: {
      icon: 'tune',
      menuitem: true,
      label: i18n.t('settings'),
      type: 'main'
    },
    component: require('@/Scandinaver/Settings/UI/settings.module.vue').default,
    // component: () => import('@/modules/Settings/settings.module.vue'),
  },
]

export default routes
