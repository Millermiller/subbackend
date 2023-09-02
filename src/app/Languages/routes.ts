import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'languages',
    path: '/language',
    meta: {
      icon: 'post-outline',
      permission: permissions.VIEW_POSTS,
      menuitem: true,
      type: 'sub',
      label: i18n.t('languages'),
    },
    component: () => import('@/app/Languages/UI/languages.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-languages',
        path: '',
        meta: {
          permission: permissions.VIEW_POSTS,
          menuitem: false,
        },
        component: () => import('@/app/Languages/UI/components/list-languages.component/index.vue'),
      },
    ],
  },
]

export default routes
