import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'dashboard',
    path: '/',
    meta: {
      permission: permissions.VIEW_DASHBOARD,
      icon: 'monitor-dashboard',
      menuitem: true,
      label: 'Dashboard',
      type: 'main',
    },
    component: () => import('@/app/Dashboard/UI/dashboard.module.vue'),
  },
]

export default routes
