import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'tests',
    path: '/tests',
    meta: {
      permission: permissions.VIEW_PASSINGS,
      icon: 'tune',
      menuitem: true,
      label: i18n.t('passings'),
      type: 'sub',
      language: true
    },
    component: () => import('@/Scandinaver/Test/UI/passings.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-passings',
        path: '',
        meta: {
          permission: permissions.VIEW_PASSINGS,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Test/UI/components/list-passings.component/index.vue'),
      },
    ],
  },
]

export default routes
