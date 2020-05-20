import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/log`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/log/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/log/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.put(`/admin/log/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/log/search?q=${query}`)
  },
}
