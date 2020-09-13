import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'

export namespace API {
  @Service()
  export class CardApi {
    createCard(card: Card): Promise<AxiosResponse<Card>> {
      return request.post(`/card/${card.word.id}/${card.translate.id}/${card.asset.id}`)
    }

    addCardToAsset(language: string, card: Card, asset: Asset): Promise<AxiosResponse<Card>> {
      return request.post(`${language}/card/${card.getId()}/${asset.getId()}`)
    }

    removeCard(language: string, card: Card, asset: Asset): Promise<AxiosResponse> {
      return request.delete(`/${language}/card/${card.getId()}/${asset.getId()}`)
    }

    destroyCard(card: Card): Promise<AxiosResponse> {
      return request.delete(`/card/${card.id}`)
    }

    updateCard(id: number|string, data: any): Promise<AxiosResponse> {
      return request.put(`/card/${id}`, data)
    }

    translate(word: string, sentence: boolean): Promise<AxiosResponse> {
      return request.get('/translate', { params: { word, sentence: +sentence } })
    }

    addAdminCard(data: any): Promise<AxiosResponse> {
      // TODO: ???
      return request.post('/card', data)
    }

    addWord(form: IDictionaryForm): Promise<AxiosResponse<Card>> {
      return request.post('/word', form)
    }

    addFavourite(item: Card): Promise<AxiosResponse> {
      return request.post(`/favourite/${item.word.id}/${item.translate.id}`)
    }

    destroyFavourite(item: Card): Promise<AxiosResponse> {
      return request.delete(`/favourite/${item.word.id}`)
    }

    uploadWordFile(data: any): Promise<AxiosResponse> {
      return request.post('/wordfile', data)
    }
  }
}
