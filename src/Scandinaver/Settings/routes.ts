import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'settings',
    path: '/settings',
    meta: {
      permission: permissions.VIEW_SETTINGS,
      icon: 'tune',
      menuitem: true,
      label: i18n.t('settings'),
      type: 'main',
    },
    component: () => import('@/Scandinaver/Settings/UI/settings.module.vue'),
    beforeEnter: requireAuth,
  },
]

export default routes
