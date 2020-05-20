import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/users`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/users/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/users/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.put(`/admin/users/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/users/search?q=${query}`)
  },
}
