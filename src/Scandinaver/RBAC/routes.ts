import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'

const routes = [
  {
    name: 'rbac',
    path: '/rbac',
    meta: {
      icon: 'account-group',
      menuitem: true,
      type: 'main',
      label: 'RBAC',
    },
    component: () => import('@/Scandinaver/RBAC/UI/rbac.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-roles',
        path: 'roles',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'roles',
        },
        component: () => import('@/Scandinaver/RBAC/UI/list-roles.component/index.vue'),
      },
      {
        name: 'list-permissions',
        path: 'permissions',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'permissions',
        },
        component: () => import('@/Scandinaver/RBAC/UI/list-permissions.component/index.vue'),
      },
      {
        name: 'settings',
        path: 'settings',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'settings',
        },
        component: () => import('@/Scandinaver/RBAC/UI/settings.component/index.vue'),
      },
    ],
  },
]

export default routes
