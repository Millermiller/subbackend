import { AxiosResponse } from 'axios'
import request from '@/utils/request'

export namespace API{
  export class TranslateApi {

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/translate/${id}`)
    }

    search(query: string, sentence: boolean): Promise<AxiosResponse> {
      return request.get('/translate', { params: { query, sentence } })
    }

    sentences(): Promise<AxiosResponse> {
      return request.get('/sentences')
    }
  }
}
