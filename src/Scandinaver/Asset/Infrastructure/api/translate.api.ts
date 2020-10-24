import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

export namespace API{
  export class TranslateApi {
    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/translate/${id}`)
    }

    search(query: string, sentence: boolean): Promise<AxiosResponse<Card[]>> {
      const { language } = store.getters
      return request.get(`${language}/translate`, { params: { query, sentence } })
    }

    sentences(language: string): Promise<AxiosResponse<Card[]>> {
      return request.get(`/${language}/cards/sentence`)
    }
  }
}
