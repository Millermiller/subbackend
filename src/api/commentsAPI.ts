import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/comments`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/comments/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/comments/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.post(`/admin/comments/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/comments/search?q=${query}`)
  },
}
