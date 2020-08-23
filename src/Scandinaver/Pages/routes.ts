import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'pages',
    path: '/pages',
    meta: {
      icon: 'book-open-page-variant',
      menuitem: true,
      type: 'main',
      label: i18n.t('pages'),
    },
    component: require('@/Scandinaver/Pages/UI/pages.module.vue').default,
    children: [
      {
        name: 'list-pages',
        path: 'list',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label:  i18n.t('list'),
        },
        // component: () => import('@/modules/Blog/components/edit-post.component/index.vue'),
        component: require('@/Scandinaver/Blog/UI/components/list-post.component/index.vue').default,
      },
      {
        name: 'add-page',
        path: 'add',
        meta: {
          icon: 'file-plus',
          menuitem: true,
          type: 'main',
          label: i18n.t('addPage'),
        },
        component: require('@/Scandinaver/Pages/UI/components/add-page.component/index.vue').default,
      },
      {
        name: 'page',
        path: ':id',
        meta: {
          menuitem: false,
        },
        component: require('@/Scandinaver/Pages/UI/components/edit-page.component/index.vue').default,
      },
    ]
  },
]

export default routes
