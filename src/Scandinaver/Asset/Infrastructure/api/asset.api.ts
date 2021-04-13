import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Responses } from '../../../Core/Domain/Contract/Responses'

export namespace API {
  @Service()
  export class AssetApi extends BaseAPI<Asset> {
    protected type: ClassType<Asset> = Asset

    one(id: number): Promise<AxiosResponse<Asset>> {
      return request.get(`/asset/${id}`)
    }

    getAssets(language: string): Promise<AxiosResponse<Responses.GetAssetsResponse>> {
      return request.get(`/${language}/assets`)
    }

    update(id: number|string, data: any): Promise<AxiosResponse> {
      return request.put(`/asset/${id}`, data)
    }

    save(asset: Asset): Promise<AxiosResponse> {
      return request.put(`/asset/${asset.getId()}`, asset)
    }

    translate(data: any): Promise<AxiosResponse> {
      return request.post('/translate', data)
    }

    getValues(card: any): Promise<AxiosResponse> {
      return request.get(`/values/${card.word_id}`)
    }

    destroyCard(card: any): Promise<AxiosResponse> {
      return request.delete(`/card/${card.id}/${card.asset_id}`)
    }

    updateTitle(id: number, data: any): Promise<AxiosResponse> {
      return request.post(`/asset/${id}`, data)
    }

    all(): Promise<AxiosResponse<Asset[]>> {
      throw new Error('Method not implemented.')
    }

    create(data: any): Promise<AxiosResponse<Asset>> {
      return request.post('/asset', data)
    }

    delete(id: number): Promise<any> {
      return request.delete(`/asset/${id}`)
    }

    search(data: any): Promise<AxiosResponse<Asset[]>> {
      throw new Error('Method not implemented.')
    }
  }
}
