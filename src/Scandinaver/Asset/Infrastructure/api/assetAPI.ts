import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { Responses } from '../../../Core/Domain/Contract/Responses'

export namespace API {
  @Service()
  export class AssetApi extends BaseAPI<Asset> {
    protected type: ClassType<Asset> = Asset

    one(id: number): Promise<AxiosResponse<Asset>> {
      const { language } = store.getters
      return request.get(`/${language}/asset/${id}`)
    }

    getAssets(language: string): Promise<AxiosResponse<Responses.GetAssetsResponse>> {
      return request.get(`/${language}/assets`)
    }

    updateAsset(asset: Asset, data: any): Promise<AxiosResponse> {
      return request.put(`/asset/${asset.getId()}`, data)
    }

    save(asset: Asset): Promise<AxiosResponse> {
      return request.put(`/asset/${asset.getId()}`, asset)
    }

    destroyAsset(language: string, asset: Asset): Promise<AxiosResponse> {
      return request.delete(`/${language}/asset/${asset.id}`)
    }

    addAsset(language: string, type: any): Promise<AxiosResponse> {
      return request.post(`/${language}/level`, { asset_id: type })
    }

    updateAudio(formdata: FormData): Promise<AxiosResponse> {
      return request.post('/audio', formdata)
    }

    translate(data: any): Promise<AxiosResponse> {
      return request.post('/translate', data)
    }

    changeUsedTranslate(data: any): Promise<AxiosResponse> {
      return request.post('/translate', data)
    }

    getValues(card: any): Promise<AxiosResponse> {
      return request.get(`/values/${card.word_id}`)
    }

    getExamples(card: any): Promise<AxiosResponse> {
      return request.get(`/examples/${card.id}`)
    }

    addCard(data: any): Promise<AxiosResponse> {
      return request.post('/card', data)
    }

    destroyCard(card: any): Promise<AxiosResponse> {
      return request.delete(`/card/${card.id}/${card.asset_id}`)
    }

    getTranslate(text: string, sentence: number): Promise<AxiosResponse> {
      return request.get('/translate', { params: { word: text, sentence } })
    }

    reloadActiveAssets(id: any): Promise<AxiosResponse> {
      return request.get(`/asset/${id}`)
    }

    updateTitle(id: number, data: any): Promise<AxiosResponse> {
      return request.post(`/asset/${id}`, data)
    }

    all(): Promise<AxiosResponse<Asset[]>> {
      throw new Error('Method not implemented.')
    }

    create(data: any): Promise<AxiosResponse<Asset>> {
      throw new Error('Method not implemented.')
    }

    delete(entity: Asset): Promise<any> {
      throw new Error('Method not implemented.')
    }

    update(entity: Asset, data: any): Promise<AxiosResponse<Asset>> {
      throw new Error('Method not implemented.')
    }
  }
}
