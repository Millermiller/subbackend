import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'

export namespace API {
  @Service()
  export class CardApi extends BaseAPI<Card> {
    protected readonly type: ClassType<Card> = Card
    protected readonly baseUrl = 'card'

    public async all(filters: FiltersData): Promise<AxiosResponse<PaginatedResponse<Card>>> {
      const existingFilter = filters.filter.filter(i => i.field === 'language.id')[0]
      if (existingFilter) {
        existingFilter.value = store.getters.language ? store.getters.language.id : 1
      } else {
        filters.filter.push({ field: 'language.id', value: store.getters.language.id, operator: 'eq' })
      }
      return request.get(`/${this.baseUrl}`, {
        params: {
          sort: filters.sort,
          filter: filters.filter,
          pageSize: filters.pageSize,
          page: filters.page,
        },
      })
    }

    public async one(id: number): Promise<AxiosResponse<Card>> {
      throw new Error('Method not implemented.');
    }

    public async create(data: any): Promise<AxiosResponse<Card>> {
      throw new Error('Method not implemented.');
    }

    public async delete(id: string | number): Promise<any> {
      throw new Error('Method not implemented.');
    }

    public async search(query: string): Promise<AxiosResponse<Card[]>> {
      throw new Error('Method not implemented.');
    }

    public async translate(query: string, sentence: boolean): Promise<AxiosResponse<Card[]>> {
      return request.get(`/${this.baseUrl}/search`, {
        params: { query, sentence: +sentence, lang: store.getters.language.id },
      })
    }

    public async createCard(card: Card): Promise<AxiosResponse<Card>> {
      return request.post(`/${this.baseUrl}/${card.term.id}/${card.translate.getId()}/${card.asset.id}`)
    }

    public async addCardToAsset(language: string, card: Card, asset: Asset): Promise<AxiosResponse<Card>> {
      return request.post(`/asset/${asset.getId()}/${card.getId()}`)
    }

    public async removeCard(card: Card, asset: Asset): Promise<AxiosResponse> {
      return request.delete(`/asset/${asset.getId()}/${card.getId()}`)
    }

    public async destroyCard(card: Card): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/${card.getId()}`)
    }

    public async addWord(form: IDictionaryForm): Promise<AxiosResponse<Card>> {
      return request.post('/word', form)
    }

    public async uploadWordFile(language: string, data: any): Promise<AxiosResponse> {
      return request.post(`/${language}/wordfile`, data)
    }
  }
}
