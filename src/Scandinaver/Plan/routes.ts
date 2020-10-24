
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
    component: () => import('@/Scandinaver/Plan/UI/plan.module.vue'),
    children: [
      {
        name: 'list-post',
        path: '/plans',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          label: i18n.t('list'),
        },
        component: () => import('@/Scandinaver/Blog/UI/components/edit-post.component/index.vue'),
      },
      {
        name: 'add-tariff',
        path: '/plans/add',
        meta: {
          icon: 'shape-square-plus',
          menuitem: true,
          label: i18n.t('addTariff'),
        },
        component: () => import('@/Scandinaver/Plan/UI/components/add-plan.component/index.vue'),
      },
      {
        name: 'edit-tariff',
        path: '/plans/:id',
        meta: {
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Plan/UI/components/edit-plan.component/index.vue'),
      },
    ],
  },
]

export default routes
