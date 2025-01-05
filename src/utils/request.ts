import axios from 'axios'
import { store } from '@/app/Core/Infrastructure/store'
import { router } from '@/router'
import { deserialize } from 'json-api-deserialize'
import TokenService from '@/app/Core/Application/token.service'
import { SnackbarProgrammatic as Snackbar } from 'buefy'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true // send cookies when cross-domain requests
})

service.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken()
    config.headers.common.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    Promise.reject(error).then(r => console.log(r))
  },
)

service.interceptors.response.use(response => ({
  ...response,
  ...deserialize(response.data),
}), async (error) => {
  const originalConfig = error.config
  if (error.response.status === 422) {
    Snackbar.open(error.response.data.title)
    const errors = Object.values(error.response.data.violations)
    // errors.forEach((error: any, index: any) => {
    //   Snackbar.open({ message: error.title, duration: 5000 })
    // })
  }
  if (error.response.status === 500) {
    Snackbar.open(error.response.data.title)
  }
  if (error.response.status === 403) {
    store.commit('setAuth', false)
    store.commit('resetUser')
    await router.push('/login')
  }
  if (error.response.status === 401 && !originalConfig._retry && error.response.config.url !== '/login') {
    originalConfig._retry = true
    delete service.defaults.headers.common.Authorization
    const rs = await service.post('/api/token/refresh', {
      refresh_token: TokenService.getRefreshToken(),
    }, {
      headers: { Authorization: '' },
    })
    originalConfig.headers.Authorization = `Bearer ${rs.data.token}`
    TokenService.setToken(rs.data.token)
    TokenService.setRefreshToken(rs.data.refreshToken)
    return service(originalConfig)
  }
  return Promise.reject(error.response.data)
})

export default service
