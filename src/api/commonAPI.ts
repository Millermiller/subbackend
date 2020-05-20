import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  loadDashboard(): Promise<AxiosResponse> {
    return request.get(`/dashboard`)
  },
  sendMail(): Promise<AxiosResponse> {
    return request.post(`/send`)
  },
}
