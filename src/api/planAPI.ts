import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/plan`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/plan/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/plan/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.put(`/admin/plan/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/plan/search?q=${query}`)
  },
  create(form: any): Promise<AxiosResponse> {
    return request.put(`/admin/plan`, form)
  },
}
