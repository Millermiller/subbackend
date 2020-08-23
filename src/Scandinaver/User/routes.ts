import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'users',
    path: '/users',
    meta: {
      icon: 'account-group',
      menuitem: true,
      label: i18n.t('users'),
    },
    //component: () => import('@/modules/Users/users.module.vue'),
    component: require('@/Scandinaver/User/UI/users.module.vue').default,
    children: [
      {
        name: 'user',
        path: ':id',
        meta: {
          menuitem: false,
        },
        //component: () => import('@/modules/Users/components/edit-user.component/index.vue'),
        component: require('@/Scandinaver/User/UI/edit-user.component/index.vue').default,
      },
    ]
  },
]

export default routes
