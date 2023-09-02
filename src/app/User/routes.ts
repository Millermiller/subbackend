import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'users',
    path: '/users',
    meta: {
      icon: 'account-group',
      permission: permissions.VIEW_USERS,
      menuitem: true,
      type: 'main',
      label: i18n.t('users'),
    },
    component: () => import('@/app/User/UI/users.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-user',
        path: '',
        meta: {
          permission: permissions.VIEW_USERS,
          menuitem: false,
        },
        component: () => import('@/app/User/UI/components/list-user.component/index.vue'),
      },
      {
        name: 'user',
        path: ':id',
        meta: {
          permission: permissions.UPDATE_USER,
          menuitem: false,
        },
        component: () => import('@/app/User/UI/components/edit-user.component/index.vue'),
      },
    ],
  },
]

export default routes
