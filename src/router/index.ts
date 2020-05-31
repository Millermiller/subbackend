import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '@/utils/i18n'
Vue.use(VueRouter)

export const routes1: Array<RouteConfig> = [
  {
    name: 'dashboard',
    path: '/',
    meta: {
      icon: 'monitor-dashboard',
      menuitem: true,
      label: 'Dashboard',
    },
    component: require('@/modules/Dashboard/dashboard.module.vue').default,
   // component: () => import('@/modules/Dashboard/dashboard.module.vue'),
  },
  {
    name: 'assets',
    path: '/assets',
    meta: {
      icon: 'database',
      menuitem: true,
      label: i18n.t('assets')
    },
    //component: () => import('@/modules/Assets/assets.module.vue'),
    component: require('@/modules/Assets/assets.module.vue').default,
  },
  {
    name: 'upload',
    path: '/upload',
    meta: {
      icon: 'upload',
      menuitem: true,
      label: 'Загрузка'
    },
    //component: () => import('@/modules/Assets/components/upload.component/upload.component.vue'),
     component: require('@/modules/Assets/components/upload.component/upload.component.vue').default,
  },
  {
    name: 'texts',
    path: '/texts',
    meta: {
      icon: 'card-text-outline',
      menuitem: true,
      label: i18n.t('texts')
    },
    component: require('@/modules/Translates/translates.module.vue').default,
    // component: () => import('@/modules/Translates/translates.module.vue'),
    children: [
      {
        name: 'list',
        path: '',
        meta: {
          icon: 'format-list-bulleted',
          label: i18n.t('list'),
          menuitem: true,
        },
        component: require('@/modules/Translates/translates.module.vue').default,
        //component: () => import('@/modules/Translates/translates.module.vue'),
      },
      {
        name: 'edit-text',
        path: '/text/:id',
        meta: {
          menuitem: false,
        },
        //component: () => import('@/modules/Translates/components/edit.component/index.vue'),
        component:  require('@/modules/Translates/components/edit.component/index.vue').default,
      },
      {
        name: 'text-settings',
        path: '/text/settings',
        meta: {
          icon: 'tune',
          menuitem: true,
          label: i18n.t('settings'),
        },
        component:  require('@/modules/Translates/components/edit.component/index.vue').default,
      },
    ]
  },
  {
    name: 'Puzzles',
    path: '/puzzles',
    meta: {
      icon: 'puzzle',
      menuitem: true,
      label: 'Puzzles',
    },
    component: require('@/modules/Puzzles/puzzles.module.vue').default,
    // component: () => import('@/modules/Puzzles/puzzles.module.vue'),
  },
  {
    name: 'Introjs',
    path: '/intro',
    meta: {
      icon: 'tooltip-text',
      menuitem: true,
      label: 'Introjs',
    },
    component: require('@/modules/Intro/intro.module.vue').default,
    // component: () => import('@/modules/Intro/intro.module.vue'),
    children: [
      {
        name: 'Intro',
        path: '/intro/:id',
        meta: {
          icon: 'fa-tachometer',
          menuitem: false,
        },
        component: require('@/modules/Intro/components/edit-intro.component/index.vue').default,
      },
    ]
  },
  {
    name: 'settings',
    path: '/settings',
    meta: {
      icon: 'tune',
      menuitem: true,
      label: i18n.t('settings'),
    },
    component: require('@/modules/Settings/settings.module.vue').default,
    // component: () => import('@/modules/Settings/settings.module.vue'),
  },
  {
    path: '*',
    redirect: '/',
    meta: {
      icon: 'fa-sliders',
    },
  },
]

export const routes2: Array<RouteConfig> = [
  {
    name: 'users',
    path: '/users',
    meta: {
      icon: 'account-group',
      menuitem: true,
      label: i18n.t('users'),
    },
    //component: () => import('@/modules/Users/users.module.vue'),
    component: require('@/modules/Users/users.module.vue').default,
    children: [
      {
        name: 'user',
        path: ':id',
        meta: {
          menuitem: false,
        },
        //component: () => import('@/modules/Users/components/edit-user.component/index.vue'),
        component: require('@/modules/Users/components/edit-user.component/index.vue').default,
      },
    ]
  },
  {
    name: 'posts',
    path: '/post',
    meta: {
      icon: 'post-outline',
      menuitem: true,
      label:  i18n.t('posts'),
    },
    component: require('@/modules/Blog/blog.module.vue').default,
    children: [
      {
        name: 'list-post',
        path: 'list',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          label:  i18n.t('list'),
        },
        // component: () => import('@/modules/Blog/components/edit-post.component/index.vue'),
        component: require('@/modules/Blog/components/list-post.component/index.vue').default,
      },
      {
        name: 'add-post',
        path: 'add',
        //component: () => import('@/modules/Blog/components/add-post.component/index.vue'),
        component: require('@/modules/Blog/components/add-post.component/index.vue').default,
        meta: {
          menuitem: true,
          label: i18n.t('addPost'),
          icon: 'book-plus-multiple'
        },
      },
      {
        name: 'categories',
        path: 'category',
        //component: () => import('@/modules/Blog/components/edit-category.component/index.vue'),
        component: require('@/modules/Blog/components/edit-category.component/index.vue').default,
        meta: {
          menuitem: true,
          label: i18n.t('categories'),
          icon: 'shape-outline'
        },
      },
      {
        name: 'post',
        path: ':id',
        meta: {
          menuitem: false,
        },
        // component: () => import('@/modules/Blog/components/edit-post.component/index.vue'),
        component: require('@/modules/Blog/components/edit-post.component/index.vue').default,
      },
      {
        name: 'comments',
        path: 'comments',
        // component: () => import('@/modules/Blog/components/comments.component/index.vue'),
        component: require('@/modules/Blog/components/comments.component/index.vue').default,
        meta: {
          menuitem: true,
          label: i18n.t('comments'),
          icon: 'comment-text-multiple-outline'
        },
      },
    ],
  },
  {
    name: 'pages',
    path: '/pages',
    meta: {
      icon: 'book-open-page-variant',
      menuitem: true,
      label: i18n.t('pages'),
    },
    component: require('@/modules/Pages/pages.module.vue').default,
    children: [
      {
        name: 'page',
        path: '/page/:id',
        meta: {
          menuitem: false,
        },
        component: require('@/modules/Pages/components/edit-page.component/index.vue').default,
      },
      {
        name: 'add-page',
        path: '/page/add',
        meta: {
          icon: 'file-plus',
          menuitem: true,
          label: i18n.t('addPage'),
        },
        component: require('@/modules/Pages/components/add-page.component/index.vue').default,
      },
    ]
  },
  {
    name: 'tariffs',
    path: '/plans',
    meta: {
      icon: 'cash-multiple',
      menuitem: true,
      label: i18n.t('tariffs'),
    },
    component: require('@/modules/Plan/plan.module.vue').default,
    children: [
      {
        name: 'list-post',
        path: '/plans',
        meta: {
          icon: 'format-list-bulleted',
          menuitem: true,
          label:  i18n.t('list'),
        },
        // component: () => import('@/modules/Blog/components/edit-post.component/index.vue'),
        component: require('@/modules/Blog/components/edit-post.component/index.vue').default,
      },
      {
        name: 'add-tariff',
        path: '/plans/add',
        meta: {
          icon: 'shape-square-plus',
          menuitem: true,
          label: i18n.t('addTariff'),
        },
        component: require('@/modules/Plan/components/add-plan.component/index.vue').default,
      },
      {
        name: 'edit-tariff',
        path: '/plans/:id',
        meta: {
          menuitem: false,
        },
        component: require('@/modules/Plan/components/edit-plan.component/index.vue').default,
      },
    ]
  },
  //{
  //  name: 'Почта',
  //  path: '/mails',
  //  meta: {
  //    icon: 'fa-sliders',
  //    menuitem: true,
  //  },
  //  component: require('@/modules/Settings/settings.module.vue'),
  //},
  {
    name: 'messages',
    path: '/messages',
    meta: {
      icon: 'message-settings-outline',
      menuitem: true,
      label: i18n.t('messages'),
    },
    component: require('@/modules/Messages/messages.module.vue').default,
  }
]

export const routes = routes1.concat(routes2);

export const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes,
})
