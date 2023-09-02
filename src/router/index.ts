import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { LoginService } from '@/app/Core/Application/login.service'
import assetRoutes from '@/app/Asset/routes'
import coreRoutes from '@/app/Core/routes'
import translateRoutes from '@/app/Translate/routes'
import puzzleRoutes from '@/app/Puzzle/routes'
import blogRoutes from '@/app/Blog/routes'
import introRoutes from '@/app/Intro/routes'
import pagesRoutes from '@/app/Pages/routes'
import settingsRoutes from '@/app/Settings/routes'
import userRoutes from '@/app/User/routes'
import rbacRoutes from '@/app/RBAC/routes'
import passingRoutes from '@/app/Test/routes'
import languageRoutes from '@/app/Languages/routes'
import billingRoutes from '@/app/Billing/routes'
import statisticRoutes from '@/app/Statistic/routes'

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
  ...languageRoutes,
  ...coreRoutes,
  ...assetRoutes,
  ...blogRoutes,
  ...introRoutes,
  // ...pagesRoutes,
  ...billingRoutes,
  ...puzzleRoutes,
  ...settingsRoutes,
  ...translateRoutes,
  ...userRoutes,
  ...rbacRoutes,
  ...passingRoutes,
  ...statisticRoutes,
  {
    path: '*',
    redirect: '/is',
    meta: { menuitem: false },
  },
]

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes,
})
