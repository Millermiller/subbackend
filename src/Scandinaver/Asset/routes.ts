import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'assets',
    path: '/assets',
    meta: {
      permission: permissions.VIEW_ASSETS,
      icon: 'database',
      menuitem: true,
      type: 'sub',
      language: true,
      label: i18n.t('assets'),
    },
    beforeEnter: requireAuth,
    component: () => import('@/Scandinaver/Asset/UI/assets.module.vue'),
  },
  {
    name: 'upload',
    path: '/upload',
    meta: {
      permission: permissions.VIEW_UPLOAD_PAGE,
      icon: 'upload',
      menuitem: true,
      type: 'sub',
      label: 'Загрузка',
      language: true,
    },
    beforeEnter: requireAuth,
    component: () => import('@/Scandinaver/Asset/UI/upload.component/upload.component.vue'),
  },
]

export default routes
