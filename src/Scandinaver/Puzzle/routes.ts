import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'Puzzles',
    path: '/puzzle',
    meta: {
      permission: permissions.VIEW_PUZZLES,
      icon: 'puzzle',
      menuitem: true,
      label: i18n.t('Puzzles'),
      type: 'sub',
      language: true,
    },
    component: () => import('@/Scandinaver/Puzzle/UI/puzzles.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-puzzles',
        path: '',
        meta: {
          permission: permissions.VIEW_PUZZLES,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Puzzle/UI/list-puzzles.component/index.vue'),
      },
    ],
  },
]

export default routes
