import { requireAuth } from '@/router'

const routes = [
  {
    name: 'Puzzles',
    path: '/puzzles',
    meta: {
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
