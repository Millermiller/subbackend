import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/meta`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/meta/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/meta/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.put(`/admin/meta/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/meta/search?q=${query}`)
  },
}
