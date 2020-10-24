import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'

const routes = [
  {
    name: 'users',
    path: '/users',
    meta: {
      icon: 'account-group',
      menuitem: true,
      type: 'main',
      label: i18n.t('users'),
    },
    component: () => import('@/Scandinaver/User/UI/users.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-user',
        path: '',
        meta: {
          menuitem: false,
        },
        component: () => import('@/Scandinaver/User/UI/list-user.component/index.vue'),
      },
      {
        name: 'user',
        path: ':id',
        meta: {
          menuitem: false,
        },
        component: () => import('@/Scandinaver/User/UI/edit-user.component/index.vue'),
      },
    ],
  },
]

export default routes
