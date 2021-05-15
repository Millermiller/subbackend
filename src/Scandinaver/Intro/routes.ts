import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'Introjs',
    path: '/intro',
    meta: {
      permission: permissions.VIEW_INTRO,
      icon: 'tooltip-text',
      menuitem: true,
      type: 'main',
      label: 'Introjs',
    },
    component: () => import('@/Scandinaver/Intro/UI/intro.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-intro',
        path: '',
        meta: {
          permission: permissions.VIEW_INTRO,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Intro/UI/components/list-intro.component/index.vue'),
      },
      {
        name: 'create intro',
        path: 'new',
        meta: {
          permission: permissions.UPDATE_INTRO,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Intro/UI/components/edit-intro.component/index.vue'),
      },
      {
        name: 'intro',
        path: ':id',
        meta: {
          permission: permissions.UPDATE_INTRO,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Intro/UI/components/edit-intro.component/index.vue'),
      },
    ],
  },
]

export default routes
