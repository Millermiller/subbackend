import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'

export namespace API {
  @Service()
  export class FileAPI {
    addCard(word: any, translate: any, issentence: any): Promise<AxiosResponse> {
      return request.post('/card', { word, translate, issentence })
    }
  }
}
