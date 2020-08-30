import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

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
    component: require('@/Scandinaver/Translate/UI/translates.module.vue').default,
    // component: () => import('@/modules/Translates/translates.module.vue'),
    children: [
      {
        name: 'list',
        path: 'list',
        meta: {
          icon: 'format-list-bulleted',
          label: i18n.t('list'),
          menuitem: true,
        },
        component: require('@/Scandinaver/Translate/UI/translates.module.vue').default,
        //component: () => import('@/modules/Translates/translates.module.vue'),
      },
      {
        name: 'edit-text',
        path: ':id',
        meta: {
          menuitem: false,
        },
        //component: () => import('@/modules/Translates/components/edit.component/index.vue'),
        component:  require('@/Scandinaver/Translate/UI/edit.component/index.vue').default,
      },
      {
        name: 'text-settings',
        path: 'settings',
        meta: {
          icon: 'tune',
          menuitem: true,
          label: i18n.t('settings'),
        },
        component:  require('@/Scandinaver/Translate/UI/edit.component/index.vue').default,
      },
    ]
  },
]

export default routes
