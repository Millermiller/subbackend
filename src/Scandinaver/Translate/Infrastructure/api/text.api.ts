import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class TextAPI extends BaseAPI<Translate> {
    protected type: ClassType<Translate> = Translate

    all(): Promise<AxiosResponse> {
      return request.get('/text')
    }

    one(id: number): Promise<AxiosResponse<Translate>> {
      return request.get(`/text/${id}`)
    }

    create(form: any): Promise<AxiosResponse<Translate>> {
      return request.post('/text', form)
    }

    update(id: string | number, data: any): Promise<AxiosResponse<Translate>> {
      return request.put(`/text/${id}`, data)
    }

    delete(id: string | number): Promise<any> {
      return request.delete(`/text/${id}`)
    }

    search(data: any): Promise<AxiosResponse<Translate[]>> {
      throw new Error('Method not implemented.');
    }

    saveDescription(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/text/description/${id}`, form)
    }

    saveImage(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/text/image/${id}`, form)
    }

    getSynonyms(id: number): Promise<AxiosResponse<Synonym[]>> {
      return request.get(`/text/synonyms/${id}`)
    }

    addSynonym(data: any): Promise<AxiosResponse<Synonym>> {
      return request.post('/text/synonym', data)
    }

    deleteSynonym(id: number): Promise<AxiosResponse> {
      return request.delete(`/text/synonym/${id}`)
    }

    getTexts(language: string): Promise<AxiosResponse<Translate[]>> {
      return request.get(`/${language}/texts`)
    }

    saveExtra(data: any): Promise<AxiosResponse> {
      return request.post('/text/extra', data)
    }

    saveSentences(data: any): Promise<AxiosResponse> {
      return request.post('/text/sentences', data)
    }

    saveText(data: any): Promise<AxiosResponse> {
      return request.post('/text', data)
    }

    publishText(data: any): Promise<AxiosResponse> {
      return request.post('/text/publish', data)
    }
  }
}
