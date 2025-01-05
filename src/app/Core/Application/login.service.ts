import { AxiosResponse } from 'axios'
import Vue from 'vue'
import { store } from '@/app/Core/Infrastructure/store'
import { API, ILoginData } from '../Infrastructure/api/user.api'
import UserAPI = API.UserAPI
import jwtDecode, { JwtPayload } from 'jwt-decode'
import TokenService from '@/app/Core/Application/token.service';

export class LoginService {
  public static login(payload: any): Promise<AxiosResponse<ILoginData>> {
    return new Promise((resolve, reject) => {
      UserAPI.login(payload).then(
        (response) => {
          if (response.status === 200) {
            const decoded = jwtDecode<JwtPayload>(response.data.token)
            const token = response.data.token
            const refreshToken = response.data.refreshToken
            TokenService.setToken(token)
            TokenService.setRefreshToken(refreshToken)
            this.fetchUser(`Bearer ${token}`).then(() => resolve())
          } else {
            reject(response.data.message)
          }
        },
        (response) => {
          reject(response)
        },
      )
    })
  }

  public static checkAuth(): Promise<void> {
    return new Promise((resolve, reject) => {
      const token = TokenService.getToken()
      const { auth } = store.getters
      if (auth !== false) {
        resolve()
      }
      if (auth === false) {
        if (token !== null) {
          this.fetchUser(`Bearer ${token}`).then(
            () => resolve(),
            () => reject(),
          )
        } else {
          reject()
        }
      }
    })
  }

  public static logout(): void {
    TokenService.deleteToken()
    TokenService.deleteRefreshToken()
    store.commit('setAuth', false)
    store.commit('resetUser')
  }

  private static fetchUser(token: string): Promise<void> {
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
