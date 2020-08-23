import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'assets',
    path: '/assets',
    meta: {
      icon: 'database',
      menuitem: true,
      type: 'sub',
      label: i18n.t('assets')
    },
    //component: () => import('@/modules/Assets/assets.module.vue'),
    component: require('@/Scandinaver/Asset/UI/assets.module.vue').default,
  },
  {
    name: 'upload',
    path: '/upload',
    meta: {
      icon: 'upload',
      menuitem: true,
      type: 'sub',
      label: 'Загрузка'
    },
    //component: () => import('@/modules/Assets/components/upload.component/upload.component.vue'),
    component: require('@/Scandinaver/Asset/UI/upload.component/upload.component.vue').default,
  },
]

export default routes
