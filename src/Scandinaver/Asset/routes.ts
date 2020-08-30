import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

const routes = [
  {
    name: 'assets',
    path: '/assets',
    meta: {
      icon: 'database',
      menuitem: true,
      type: 'sub',
      language: true,
      label: i18n.t('assets')
    },
    beforeEnter: requireAuth,
    component: require('@/Scandinaver/Asset/UI/assets.module.vue').default,
  },
  {
    name: 'upload',
    path: '/upload',
    meta: {
      icon: 'upload',
      menuitem: true,
      type: 'sub',
      label: 'Загрузка',
      language: true,
    },
    beforeEnter: requireAuth,
    component: require('@/Scandinaver/Asset/UI/upload.component/upload.component.vue').default,
  },
]

export default routes
