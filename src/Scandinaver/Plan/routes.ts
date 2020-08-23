import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'tariffs',
    path: '/plans',
    meta: {
      icon: 'cash-multiple',
      menuitem: true,
      label: i18n.t('tariffs'),
    },
    component: require('@/Scandinaver/Plan/UI/plan.module.vue').default,
    children: [
      {
        name: 'list-post',
        path: '/plans',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          label:  i18n.t('list'),
        },
        // component: () => import('@/modules/Blog/components/edit-post.component/index.vue'),
        component: require('@/Scandinaver/Blog/UI/components/edit-post.component/index.vue').default,
      },
      {
        name: 'add-tariff',
        path: '/plans/add',
        meta: {
          icon: 'shape-square-plus',
          menuitem: true,
          label: i18n.t('addTariff'),
        },
        component: require('@/Scandinaver/Plan/UI/components/add-plan.component/index.vue').default,
      },
      {
        name: 'edit-tariff',
        path: '/plans/:id',
        meta: {
          menuitem: false,
        },
        component: require('@/Scandinaver/Plan/UI/components/edit-plan.component/index.vue').default,
      },
    ]
  },
]

export default routes
