import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/categories`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/categories/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/categories/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.post(`/admin/categories/${id}`, form)
  },
  create(form: any): Promise<AxiosResponse> {
    return request.put(`/admin/categories`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/categories/search?q=${query}`)
  },
}
