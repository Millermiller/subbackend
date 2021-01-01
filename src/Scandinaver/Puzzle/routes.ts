import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'Puzzles',
    path: '/puzzles',
    meta: {
      permission: permissions.VIEW_PUZZLES,
      icon: 'puzzle',
      menuitem: true,
      label: 'Puzzles',
      type: 'sub',
      language: true,
    },
    component: () => import('@/Scandinaver/Puzzle/UI/puzzles.module.vue'),
    beforeEnter: requireAuth,
  },
]

export default routes
