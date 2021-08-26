import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'
import { permissions } from '@/permissions/permission.type'

const routes = [
  {
    name: 'posts',
    path: '/post',
    meta: {
      icon: 'post-outline',
      menuitem: true,
      type: 'main',
      label: i18n.t('blog'),
    },
    component: () => import('@/Scandinaver/Blog/UI/blog.module.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-post',
        path: 'list',
        meta: {
          icon: 'format-list-bulleted',
          permission: permissions.VIEW_POSTS,
          menuitem: true,
          type: 'main',
          label: i18n.t('posts'),
        },
        component: () => import('@/Scandinaver/Blog/UI/components/list-post.component/index.vue'),
      },
      {
        name: 'add-post',
        path: 'add',
        component: () => import('@/Scandinaver/Blog/UI/components/add-post.component/index.vue'),
        meta: {
          menuitem: false,
          permission: permissions.CREATE_POST,
          type: 'main',
          label: i18n.t('addPost'),
          icon: 'book-plus-multiple',
        },
      },
      {
        name: 'categories',
        path: 'category',
        component: () => import('@/Scandinaver/Blog/UI/components/list-category.component/index.vue'),
        meta: {
          menuitem: true,
          permission: permissions.VIEW_CATEGORIES,
          type: 'main',
          label: i18n.t('categories'),
          icon: 'shape-outline',
        },
      },
      {
        name: 'comments',
        path: 'comments',
        component: () => import('@/Scandinaver/Blog/UI/components/comments.component/index.vue'),
        meta: {
          menuitem: true,
          permission: permissions.VIEW_COMMENTS,
          type: 'main',
          label: i18n.t('comments'),
          icon: 'comment-text-multiple-outline',
        },
      },
      {
        name: 'post',
        path: ':id',
        meta: {
          menuitem: false,
          permission: permissions.UPDATE_POST,
        },
        component: () => import('@/Scandinaver/Blog/UI/components/edit-post.component/index.vue'),
      },
    ],
  },
]

export default routes
