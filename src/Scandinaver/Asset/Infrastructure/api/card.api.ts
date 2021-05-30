import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class CardApi extends BaseAPI<Card> {
    protected type: ClassType<Card> = Card
    protected baseUrl = 'card'

    all(): Promise<AxiosResponse<Card[]>> {
      throw new Error('Method not implemented.');
    }
    one(id: number): Promise<AxiosResponse<Card>> {
      throw new Error('Method not implemented.');
    }
    create(data: any): Promise<AxiosResponse<Card>> {
      throw new Error('Method not implemented.');
    }

    delete(id: string | number): Promise<any> {
      throw new Error('Method not implemented.');
    }

    search(query: string): Promise<AxiosResponse<Card[]>> {
      throw new Error('Method not implemented.');
    }

    translate(query: string, sentence: boolean): Promise<AxiosResponse<Card[]>> {
      return request.get(`/${this.baseUrl}/search`, {
        params: { query, sentence: +sentence, lang: store.getters.language },
      })
    }

    createCard(card: Card): Promise<AxiosResponse<Card>> {
      return request.post(`/${this.baseUrl}/${card.word.id}/${card.translate.id}/${card.asset.id}`)
    }

    addCardToAsset(language: string, card: Card, asset: Asset): Promise<AxiosResponse<Card>> {
      return request.post(`/asset/${asset.getId()}/${card.getId()}`)
    }

    removeCard(language: string, card: Card, asset: Asset): Promise<AxiosResponse> {
      return request.delete(`/${language}/${this.baseUrl}/${card.getId()}/${asset.getId()}`)
    }

    destroyCard(card: Card): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${card.getId()}`)
    }

    addWord(form: IDictionaryForm): Promise<AxiosResponse<Card>> {
      return request.post('/word', form)
    }

    uploadWordFile(language: string, data: any): Promise<AxiosResponse> {
      return request.post(`/${language}/wordfile`, data)
    }
  }
}
