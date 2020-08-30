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
    component: require('@/Scandinaver/Puzzle/UI/puzzles.module.vue').default,
    // component: () => import('@/modules/Puzzles/puzzles.module.vue'),
  },
]

export default routes
