import axios from 'axios'
import Vue from 'vue'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

const requestBuffer = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
})

// Request interceptors
requestBuffer.interceptors.request.use(
  (config) => {
    const { language } = store.getters
    if (language !== null) {
      config.baseURL += `/${language}`
    }
    config.responseType = 'arraybuffer'
    const cookieName = (process.env.VUE_APP_COOKIE_NAME as string) || 'authfrontend._token'
    config.headers.common.Authorization = Vue.$cookies.get(cookieName)
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

requestBuffer.interceptors.response.use(undefined, (error) => {
  if (error.response) {
    Snackbar.open('Ошибка')
  }
  return Promise.reject(error.response.data)
})

export default requestBuffer
