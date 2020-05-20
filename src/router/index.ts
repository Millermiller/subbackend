import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

const routes1: Array<RouteConfig> = [
  {
    name: 'Dashboard',
    path: '/',
    meta: {
      icon: 'fa-tachometer',
      link: 'dashboard/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Dashboard/dashboard.module.vue'),
  },
  {
    name: 'Словари',
    path: '/assets',
    meta: {
      icon: 'fa-book',
      link: 'assets/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Assets/assets.module.vue'),
  },
  {
    name: 'Загрузка',
    path: '/upload',
    meta: {
      icon: 'fa-upload',
      link: 'upload/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Assets/components/upload.component/upload.component.vue'),
  },
  {
    name: 'Тексты',
    path: '/texts',
    meta: {
      icon: 'fa-file-text',
      link: 'texts/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Translates/translates.module.vue'),
    children: [
      {
        name: 'textedit',
        path: '/text/:id',
        meta: {
          icon: 'fa-tachometer',
          link: 'texts/textedit/index.vue',
          menuitem: true,
        },
        component:  require('@/modules/Translates/components/edit.component/index.vue'),
      },
    ]
  },
  {
    name: 'Паззлы',
    path: '/puzzles',
    meta: {
      icon: 'fa-puzzle-piece ',
      link: 'puzzles/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Puzzles/puzzles.module.vue'),
  },
  {
    name: 'Introjs',
    path: '/intro',
    meta: {
      icon: 'fa-info',
      link: 'intro/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Intro/intro.module.vue'),
    children: [
      {
        name: 'Intro',
        path: '/intro/:id',
        meta: {
          icon: 'fa-tachometer',
          link: 'intro/edit.vue',
          menuitem: true,
        },
        component: require('@/modules/Intro/components/edit-intro.component/index.vue'),
      },
    ]
  },
  {
    name: 'Настройки',
    path: '/settings',
    meta: {
      icon: 'fa-sliders',
      link: 'settings/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Settings/settings.module.vue'),
  },


  {
    path: '*',
    redirect: '/',
    meta: {
      icon: 'fa-sliders',
      link: '/',
    },
  },
]

const routes2: Array<RouteConfig> = [
  {
    name: 'Юзеры',
    path: '/users',
    meta: {
      icon: 'fa-users',
      link: 'users/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Users/users.module.vue'),
    children: [
      {
        name: 'Юзер',
        path: '/user/:id',
        meta: {
          icon: 'fa-tachometer',
          link: 'users/edit.vue',
        },
        component: require('@/modules/Users/components/edit-user.component/index.vue'),
      },
    ]
  },
  {
    name: 'Статьи',
    path: '/articles',
    meta: {
      icon: 'fa-book',
      menuitem: true,
    },
    component: require('@/modules/Blog/blog.module.vue'),
    children: [
      {
        name: 'Статья',
        path: ':id',
        meta: {
          icon: 'fa-tachometer',
          link: 'articles/edit.vue',
        },
        component: require('@/modules/Blog/components/edit-post.component/index.vue'),
      },
      {
        name: 'Добавить статью',
        path: 'add',
        component: require('@/modules/Blog/components/add-post.component/index.vue'),
        meta: {
          link: 'articles/add.vue',
          menuitem: true,
        },
      },
      {
        name: 'Категории',
        path: 'category',
        component: require('@/modules/Blog/components/edit-category.component/index.vue'),
        meta: {
          link: 'articles/category.vue',
          menuitem: true,
        },
      },
      {
        name: 'Комментарии',
        path: 'comments',
        component: require('@/modules/Blog/components/comments.component/index.vue'),
        meta: {
          link: 'articles/comments.vue',
          menuitem: true,
        },
      },
    ],
  },
  {
    name: 'Страницы',
    path: '/pages',
    meta: {
      icon: 'fa-file-text',
      link: 'pages/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Pages/pages.module.vue'),
    children: [
      {
        name: 'Страница',
        path: '/page/:id',
        meta: {
          icon: 'fa-tachometer',
          link: 'pages/edit.vue',
        },
        component: require('@/modules/Pages/components/edit-page.component/index.vue'),
      },
      {
        name: 'Добавить страницу',
        path: '/page/add',
        meta: {
          icon: 'fa-tachometer',
          link: 'pages/add.vue',
          menuitem: true,
        },
        component: require('@/modules/Pages/components/add-page.component/index.vue'),
      },
    ]
  },
  {
    name: 'Тарифы',
    path: '/plans',
    meta: {
      icon: 'fa-tachometer',
      link: 'plans/add.vue',
      menuitem: true,
    },
    component: require('@/modules/Plan/plan.module.vue'),
    children: [
      {
        name: 'Добавить тариф',
        path: '/plans/add',
        meta: {
          icon: 'fa-tachometer',
          link: 'plans/add.vue',
          menuitem: true,
        },
        component: require('@/modules/Plan/components/add-plan.component/index.vue'),
      },
      {
        name: 'Тариф',
        path: '/plans/:id',
        meta: {
          icon: 'fa-tachometer',
          link: 'plans/edit.vue',
        },
        component: require('@/modules/Plan/components/edit-plan.component/index.vue'),
      },
    ]
  },
  {
    name: 'Настройки',
    path: '/settings',
    meta: {
      icon: 'fa-sliders',
      link: 'settings/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Settings/settings.module.vue'),
  },
  //{
  //  name: 'Почта',
  //  path: '/mails',
  //  meta: {
  //    icon: 'fa-sliders',
  //    link: 'mails/index.vue',
  //    menuitem: true,
  //  },
  //  component: require('@/modules/Settings/settings.module.vue'),
  //},
  {
    name: 'Сообщения',
    path: '/messages',
    meta: {
      icon: 'fa-sliders',
      link: 'messages/index.vue',
      menuitem: true,
    },
    component: require('@/modules/Messages/messages.module.vue'),
  },
  {
    path: '*',
    meta: {
      icon: 'fa-sliders',
      link: '/',
    },
  },
]

export const routes = routes1.concat(routes2);

export const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes,
})
