import { Service } from 'typedi'
import { AxiosResponse } from 'axios'
import requestBuffer from '@/utils/requestBuffer'

export namespace API {
  @Service()
  export class ReaderAPI {
    read(text: string): Promise<AxiosResponse> {
      return requestBuffer.get(`/read?text=${text}`)
    }
  }
}
