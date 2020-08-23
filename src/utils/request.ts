import axios from 'axios'
import Vue from 'vue'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { SnackbarProgrammatic as Snackbar } from 'buefy'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    const language = store.getters.language
    if(language !== null) {
     // config.baseURL += `/${language}`
    }
    config.headers.common.Authorization = Vue.$cookies.get('authfrontend._token.local')
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

service.interceptors.response.use(undefined, (error) => {
  if (error.response) {
    Snackbar.open('Ошибка')
  }
  return Promise.reject(error.response.data)
})

export default service
