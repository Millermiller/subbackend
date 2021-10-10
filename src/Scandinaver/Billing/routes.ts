import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'billing',
    path: '/billing',
    meta: {
      icon: 'post-outline',
      menuitem: true,
      type: 'main',
      label: i18n.t('billing'),
    },
    component: () => import('@/Scandinaver/Billing/UI/billing.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'payments',
        path: 'payments',
        meta: {
          icon: 'format-list-bulleted',
          permission: permissions.VIEW_POSTS,
          menuitem: true,
          type: 'main',
          label: i18n.t('payments'),
        },
        component: () => import('@/Scandinaver/Billing/UI/list-payments.component/index.vue'),
      },
      {
        name: 'orders',
        path: 'orders',
        component: () => import('@/Scandinaver/Billing/UI/list-orders.component/index.vue'),
        meta: {
          menuitem: true,
          permission: permissions.VIEW_POSTS,
          type: 'main',
          label: i18n.t('orders'),
          icon: 'book-plus-multiple',
        },
      },
      {
        name: 'plans',
        path: 'plans',
        meta: {
          permission: permissions.VIEW_PLANS,
          icon: 'format-list-bulleted',
          menuitem: true,
          label: i18n.t('plans'),
        },
        component: () => import('@/Scandinaver/Billing/UI/list-plans.component/index.vue'),
      },
    ],
  },
]

export default routes
