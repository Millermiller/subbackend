import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Responses } from '../../../Core/Domain/Contract/Responses'

export namespace API {
  @Service()
  export class AssetApi {
    getAsset(language: string, id: number): Promise<AxiosResponse<Responses.GetAssetResponse>> {
      return request.get(`/${language}/asset/${id}`)
    }

    getAssets(language: string): Promise<AxiosResponse<Responses.GetAssetsResponse>> {
      return request.get(`/${language}/assets`)
    }

    updateAsset(asset: Asset, title: string): Promise<AxiosResponse> {
      return request.put(`/asset/${asset.id}`, { title })
    }

    destroyAsset(language: string, asset: Asset): Promise<AxiosResponse> {
      return request.delete(`/${language}/asset/${asset.id}`)
    }

    addAsset(type: any): Promise<AxiosResponse> {
      return request.post('/level', { asset_id: type })
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
  }
}
