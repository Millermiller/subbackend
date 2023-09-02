import i18n from '@/utils/i18n'
import { requireAuth } from '@/router'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'texts',
    path: '/texts',
    meta: {
      icon: 'card-text-outline',
      permission: permissions.VIEW_TEXTS,
      menuitem: true,
      label: i18n.t('texts'),
      type: 'sub',
      language: true,
    },
    component: () => import('@/app/Translate/UI/translates.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-texts',
        path: '',
        meta: {
          permission: permissions.VIEW_TEXTS,
          icon: 'format-list-bulleted',
          label: i18n.t('list'),
          menuitem: false,
        },
        component: () => import('@/app/Translate/UI/components/list-texts.component/index.vue'),
      },
      {
        name: 'edit-text',
        path: ':id/edit',
        meta: {
          permission: permissions.UPDATE_TEXT,
          menuitem: false,
        },
        component: () => import('@/app/Translate/UI/components/edit.component/index.vue'),
      },
      {
        name: 'text-tooltips',
        path: ':id/tooltips',
        meta: {
          permission: permissions.UPDATE_TEXT,
          menuitem: false,
        },
        component: () => import('@/app/Translate/UI/components/edit.component/tooltip.component/index.vue'),
      },
      {
        name: 'text-translate',
        path: ':id/translate',
        meta: {
          permission: permissions.UPDATE_TEXT,
          menuitem: false,
        },
        component: () => import('@/app/Translate/UI/components/edit.component/translate.component/index.vue'),
      },
      {
        name: 'text-test',
        path: ':id/test',
        meta: {
          permission: permissions.UPDATE_TEXT,
          menuitem: false,
        },
        component: () => import('@/app/Translate/UI/components/edit.component/test.component/index.vue'),
      },
    ],
  },
]

export default routes
