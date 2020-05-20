import { AxiosResponse } from 'axios'
import request from '@/utils/request'


export default {
  all(): Promise<AxiosResponse> {
    return request.get(`/admin/message`)
  },
  destroy(id: number): Promise<AxiosResponse> {
    return request.delete(`/admin/message/${id}`)
  },
  load(id: number): Promise<AxiosResponse> {
    return request.get(`/admin/message/${id}`)
  },
  save(id: number, form: any): Promise<AxiosResponse> {
    return request.put(`/admin/message/${id}`, form)
  },
  search(query: string): Promise<AxiosResponse> {
    return request.get(`/admin/message/search?q=${query}`)
  },
  read(id: number): Promise<AxiosResponse> {
    return request.post(`/admin/message/read?${id}`)
  },
}
