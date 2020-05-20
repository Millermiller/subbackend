import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/puzzle`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/puzzle/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.put(`/puzzle/${id}`, form)
  },
  create(form: any): Promise<AxiosResponse> {
    return request.post('/puzzle', form)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/puzzle/${id}`)
  },
}
