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
        name: 'Intro',
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
