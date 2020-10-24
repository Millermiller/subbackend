import { requireAuth } from '@/router'

const routes = [
  {
    name: 'Introjs',
    path: '/intro',
    meta: {
      icon: 'tooltip-text',
      menuitem: true,
      label: 'Introjs',
      type: 'main',
    },
    component: () => import('@/Scandinaver/Intro/UI/intro.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'Intro',
        path: ':id',
        meta: {
          icon: 'fa-tachometer',
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Intro/UI/components/edit-intro.component/index.vue'),
      },
    ],
  },
]

export default routes
