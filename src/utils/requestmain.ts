import axios from 'axios'
import Vue from 'vue'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
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

export default service
