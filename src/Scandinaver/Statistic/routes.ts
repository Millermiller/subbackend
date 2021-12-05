import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'statistic',
    path: '/statistic',
    meta: {
      permission: permissions.VIEW_PASSINGS,
      icon: 'tune',
      menuitem: true,
      label: i18n.t('statistic'),
      type: 'main',
    },
    component: () => import('@/Scandinaver/Statistic/UI/statistic.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-statistic',
        path: '',
        meta: {
          permission: permissions.VIEW_PASSINGS,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Statistic/UI/components/list-statistic.component/index.vue'),
      },
    ],
  },
]

export default routes
