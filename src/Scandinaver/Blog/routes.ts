import { requireAuth } from '@/router'
import i18n from '@/utils/i18n'

const routes = [
  {
    name: 'posts',
    path: '/post',
    meta: {
      icon: 'post-outline',
      menuitem: true,
      type: 'main',
      label:  i18n.t('posts'),
    },
    component: require('@/Scandinaver/Blog/UI/blog.module.vue').default,
    beforeEnter: requireAuth,
    children: [
      {
        name: 'list-post',
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
        name: 'add-post',
        path: 'add',
        //component: () => import('@/modules/Blog/components/add-post.component/index.vue'),
        component: require('@/Scandinaver/Blog/UI/components/add-post.component/index.vue').default,
        meta: {
          menuitem: true,
          type: 'main',
          label: i18n.t('addPost'),
          icon: 'book-plus-multiple'
        },
      },
      {
        name: 'categories',
        path: 'category',
        component: () => import('@/Scandinaver/Blog/UI/components/edit-category.component/index.vue'),
        meta: {
          menuitem: true,
          type: 'main',
          label: i18n.t('categories'),
          icon: 'shape-outline'
        },
      },
      {
        name: 'comments',
        path: 'comments',
        component: () => import('@/Scandinaver/Blog/UI/components/comments.component/index.vue'),
        meta: {
          menuitem: true,
          type: 'main',
          label: i18n.t('comments'),
          icon: 'comment-text-multiple-outline'
        },
      },
      {
        name: 'post',
        path: ':id',
        meta: {
          menuitem: false,
        },
        // component: () => import('@/modules/Blog/components/edit-post.component/index.vue'),
        component: require('@/Scandinaver/Blog/UI/components/edit-post.component/index.vue').default,
      },
    ],
  },
]

export default routes
