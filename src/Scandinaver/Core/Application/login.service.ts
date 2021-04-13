import { AxiosResponse } from 'axios'
import Vue from 'vue'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { API, ILoginData } from '../Infrastructure/api/user.api'
import UserAPI = API.UserAPI

export class LoginService {
  public static login(payload: any): Promise<AxiosResponse<ILoginData>> {
    return new Promise((resolve, reject) => {
      UserAPI.login(payload).then(
        (response) => {
          if (response.status === 200) {
            const token = `Bearer ${response.data.access_token}`
            const cookieName = process.env.VUE_APP_COOKIE_NAME as string || 'authfrontend._token'
            Vue.$cookies.set(cookieName, token, 8600, '/', process.env.VUE_APP_COOKIE_DOMAIN || '.scandinaver.org')
            window.localStorage.setItem(cookieName, token)
            this.fetchUser(token).then(() => resolve())
          } else {
            reject(response.data.message)
          }
        },
        (response) => {
          reject(response.response.data)
        },
      )
    })
  }

  public static checkAuth() {
    return new Promise((resolve, reject) => {
      const cookieName = process.env.VUE_APP_COOKIE_NAME as string || 'authfrontend._token'
      const token = Vue.$cookies.get(cookieName)
      const { auth } = store.getters
      if (auth !== false) {
        resolve()
      }
      if (auth === false) {
        if (token !== null) {
          this.fetchUser(token).then(
            () => resolve(),
            () => reject(),
          )
        } else {
          reject()
        }
      }
    })
  }

  public static logout() {
    const cookieName = process.env.VUE_APP_COOKIE_NAME as string || 'authfrontend._token'
    const token = Vue.$cookies.get(cookieName)
    return UserAPI.logout(token).then((response) => {
      store.commit('setAuth', false)
      store.commit('resetUser')
      Vue.$cookies.remove(cookieName, '/', process.env.VUE_APP_COOKIE_DOMAIN || '.scandinaver.org')
    })
  }

  private static fetchUser(token: string) {
    return new Promise((resolve, reject) => {
      store.commit('setFullscreenLoading', true)
      UserAPI
        .fetch(token)
        .then(
          (response) => {
            Vue.$user = response.data
            store.commit('setUser', response.data)
            store.commit('setAuth', true)
            store.dispatch('initialiseRBAC', response.data).then(() => {
              resolve()
            })
          },
          () => reject(),
        )
        .finally(() => store.commit('setFullscreenLoading', false))
    })
  }
}
