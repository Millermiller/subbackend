import request from '@/utils/request'
import { AxiosResponse } from 'axios'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/articles`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/articles/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/articles/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.post(`/admin/articles/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/articles/search?q=${query}`)
  },
}
