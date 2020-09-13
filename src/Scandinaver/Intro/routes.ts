import { requireAuth } from '@/router'

const routes = [
  {
    name: 'Introjs',
    path: '/intro',
    meta: {
      icon: 'tooltip-text',
      menuitem: true,
      label: 'Introjs',
      type: 'main'
    },
    component: require('@/Scandinaver/Intro/UI/intro.module.vue').default,
    beforeEnter: requireAuth,
    children: [
      {
        name: 'Intro',
        path: ':id',
        meta: {
          icon: 'fa-tachometer',
          menuitem: false,
        },
        component: require('@/Scandinaver/Intro/UI/components/edit-intro.component/index.vue').default,
      },
    ]
  },
]

export default routes