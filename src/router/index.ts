import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { LoginService } from '@/Scandinaver/Core/Application/login.service'
import assetRoutes from '@/Scandinaver/Asset/routes'
import coreRoutes from '@/Scandinaver/Core/routes'
import translateRoutes from '@/Scandinaver/Translate/routes'
import puzzleRoutes from '@/Scandinaver/Puzzle/routes'
import blogRoutes from '@/Scandinaver/Blog/routes'
import introRoutes from '@/Scandinaver/Intro/routes'
import pagesRoutes from '@/Scandinaver/Pages/routes'
import planRoutes from '@/Scandinaver/Plan/routes'
import settingsRoutes from '@/Scandinaver/Settings/routes'
import userRoutes from '@/Scandinaver/User/routes'

Vue.use(VueRouter)

export function requireAuth(to: any, _from: any, next: any): any {
  LoginService.checkAuth()
    .then(
      () => next(),
      () => next({ name: 'login' }),
    )
    .catch(() => next({ name: 'login' }))
}

export const routes: RouteConfig[] = [
  ...assetRoutes,
  ...blogRoutes,
  ...coreRoutes,
  ...introRoutes,
  ...pagesRoutes,
  ...planRoutes,
  ...puzzleRoutes,
  ...settingsRoutes,
  ...translateRoutes,
  ...userRoutes,
  {
    path: '*',
    redirect: '/is',
    meta: {menuitem: false},
  },
]

export const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes: routes
})
