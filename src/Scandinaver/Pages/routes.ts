import i18n from '@/utils/i18n'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'pages',
    path: '/pages',
    meta: {
      permission: permissions.VIEW_PAGES,
      icon: 'book-open-page-variant',
      menuitem: true,
      type: 'main',
      label: i18n.t('pages'),
    },
    component: () => import('@/Scandinaver/Pages/UI/pages.module.vue'),
    children: [
      {
        name: 'list-pages',
        path: 'list',
        meta: {
          permission: permissions.VIEW_PAGES,
          icon: 'format-list-bulleted',
          menuitem: true,
          type: 'main',
          label: i18n.t('list'),
        },
        component: () => import('@/Scandinaver/Pages/UI/components/list-page.component/index.vue'),
      },
      {
        name: 'add-page',
        path: 'add',
        meta: {
          permission: permissions.CREATE_PAGE,
          icon: 'file-plus',
          menuitem: true,
          type: 'main',
          label: i18n.t('addPage'),
        },
        component: () => import('@/Scandinaver/Pages/UI/components/add-page.component/index.vue'),
      },
      {
        name: 'page',
        path: ':id',
        meta: {
          permission: permissions.UPDATE_PAGE,
          menuitem: false,
        },
        component: () => import('@/Scandinaver/Pages/UI/components/edit-page.component/index.vue'),
      },
    ],
  },
]

export default routes
