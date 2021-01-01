import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'texts',
    path: '/texts',
    meta: {
      icon: 'card-text-outline',
      menuitem: true,
      label: i18n.t('texts'),
      type: 'sub',
      language: true,
    },
    component: () => import('@/Scandinaver/Translate/UI/translates.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list',
        path: 'list',
        meta: {
          permission: permissions.VIEW_TEXTS,
          icon: 'format-list-bulleted',
          label: i18n.t('list'),
          menuitem: true,
        },
        component: () => import('@/Scandinaver/Translate/UI/translates.module.vue'),
      },
      {
        name: 'edit-text',
        path: ':id',
        meta: {
          permission: permissions.UPDATE_TEXT,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Translate/UI/edit.component/index.vue'),
      },
      {
        name: 'text-settings',
        path: 'settings',
        meta: {
          permission: permissions.VIEW_TEXT_SETTINGS,
          icon: 'tune',
          menuitem: true,
          label: i18n.t('settings'),
        },
        component: () => import('@/Scandinaver/Translate/UI/edit.component/index.vue'),
      },
    ],
  },
]

export default routes
