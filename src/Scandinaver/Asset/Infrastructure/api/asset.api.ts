import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Responses } from '../../../Core/Domain/Contract/Responses'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

export namespace API {
  @Service()
  export class AssetApi extends BaseAPI<Asset> {
    protected readonly type: ClassType<Asset> = Asset
    protected readonly baseUrl = 'asset'

    public async all(filters: FiltersData): Promise<AxiosResponse<PaginatedResponse<Asset>>> {
      const existingFilter = filters.filter.filter(i => i.field === 'language.id')[0]
      const languageId = store.getters.language.id ? store.getters.language.id : 1
      if (existingFilter) {
        existingFilter.value = languageId
      } else {
        filters.filter.push({ field: 'language.id', value: languageId, operator: 'eq' })
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

    public async search(data: any): Promise<AxiosResponse<Asset[]>> {
      throw new Error('Method not implemented.')
    }

    public async getAssets(language: string): Promise<AxiosResponse<Responses.GetAssetsResponse>> {
      return request.get(`/${this.baseUrl}`, {
        params: {
          lang: store.getters.language,
        },
      })
    }

    public async save(asset: Asset): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/${asset.getId()}`, asset)
    }

    public async translate(data: any): Promise<AxiosResponse> {
      return request.post('/translate', data)
    }

    public async getValues(card: any): Promise<AxiosResponse> {
      return request.get(`/values/${card.word_id}`)
    }

    public async destroyCard(card: any): Promise<AxiosResponse> {
      return request.delete(`/card/${card.id}/${card.asset_id}`)
    }

    public async updateTitle(id: number, data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/${id}`, data)
    }
  }
}
