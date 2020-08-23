import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

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
    // component: () => import('@/modules/Intro/intro.module.vue'),
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
