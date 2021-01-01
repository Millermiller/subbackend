import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'plans',
    path: '/plan',
    meta: {
      icon: 'cash-multiple',
      menuitem: true,
      type: 'main',
      label: i18n.t('tariffs'),
    },
    component: () => import('@/Scandinaver/Plan/UI/plan.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-plan',
        path: 'list',
        meta: {
          permission: permissions.VIEW_PLANS,
          icon: 'format-list-bulleted',
          menuitem: true,
          label: i18n.t('list'),
        },
        component: () => import('@/Scandinaver/Blog/UI/components/edit-post.component/index.vue'),
      },
      {
        name: 'add-plan',
        path: 'add',
        meta: {
          permission: permissions.CREATE_PLAN,
          icon: 'shape-square-plus',
          menuitem: true,
          label: i18n.t('addTariff'),
        },
        component: () => import('@/Scandinaver/Plan/UI/components/add-plan.component/index.vue'),
      },
      {
        name: 'edit-plan',
        path: ':id',
        meta: {
          permission: permissions.UPDATE_PLAN,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Plan/UI/components/edit-plan.component/index.vue'),
      },
    ],
  },
]

export default routes
