import { permissions } from '@/permissions/permission.type'
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
    component: () => import('@/app/RBAC/UI/rbac.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-roles',
        path: 'roles',
        meta: {
          permission: permissions.VIEW_ROLES,
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'roles',
        },
        component: () => import('@/app/RBAC/UI/components/list-roles.component/index.vue'),
      },
      {
        name: 'list-permissions',
        path: 'permissions',
        meta: {
          permission: permissions.VIEW_PERMISSIONS,
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'permissions',
        },
        component: () => import('@/app/RBAC/UI/components/list-permissions.component/index.vue'),
      },
      {
        name: 'list-groups',
        path: 'groups',
        meta: {
          permission: permissions.VIEW_PERMISSION_GROUP,
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'groups',
        },
        component: () => import('@/app/RBAC/UI/components/list-groups.component/index.vue'),
      },
      {
        name: 'rbac-ssettings',
        path: 'rbac-settings',
        meta: {
          permission: permissions.VIEW_RBAC_SETTINGS,
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: 'settings',
        },
        component: () => import('@/app/RBAC/UI/components/settings.component/index.vue'),
      },
    ],
  },
]

export default routes
