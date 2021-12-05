import axios from 'axios'
import Vue from 'vue'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import { router } from '@/router'
import { LoginService } from '@/Scandinaver/Core/Application/login.service'
import { deserialize } from 'json-api-deserialize'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    const cookieName = (process.env.VUE_APP_COOKIE_NAME as string) || 'authfrontend._token'
    config.headers.common.Authorization = Vue.$cookies.get(cookieName)
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

service.interceptors.response.use(response => ({
  ...response,
  ...deserialize(response.data),
}), async (error) => {
  if (error.response) {
    Snackbar.open(error.response.data)
    let errors = Object.values(error.response.data.errors);
    errors = errors.flat();
    errors.forEach((error: any, index: any) => {
      Snackbar.open({ message: error, duration: 5000 })
    })
  }
  if (error.response.status === 403) {
    store.commit('setAuth', false)
    store.commit('resetUser')
    const cookieName = process.env.VUE_APP_COOKIE_NAME as string || 'authfrontend._token'
    Vue.$cookies.remove(cookieName, '/', process.env.VUE_APP_COOKIE_DOMAIN || '.scandinaver.org')
    await router.push('/login')
  }
  return Promise.reject(error.response.data)
})

export default service
