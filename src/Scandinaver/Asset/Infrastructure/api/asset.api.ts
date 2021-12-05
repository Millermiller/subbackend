import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Responses } from '../../../Core/Domain/Contract/Responses'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

export namespace API {
  @Service()
  export class AssetApi extends BaseAPI<Asset> {
    protected readonly type: ClassType<Asset> = Asset
    protected readonly baseUrl = 'asset'

    public async all(): Promise<AxiosResponse<{data: Asset[], meta: any}>> {
      throw new Error('Method not implemented.')
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
