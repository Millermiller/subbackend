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
    protected baseUrl = 'text'

    all(): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}`)
    }

    one(id: number): Promise<AxiosResponse<Translate>> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    create(form: any): Promise<AxiosResponse<Translate>> {
      return request.post(`/${this.baseUrl}`, form)
    }

    update(id: string | number, data: any): Promise<AxiosResponse<Translate>> {
      return request.put(`/${this.baseUrl}/${id}`, data)
    }

    delete(id: string | number): Promise<any> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    search(data: any): Promise<AxiosResponse<Translate[]>> {
      throw new Error('Method not implemented.');
    }

    saveDescription(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/description/${id}`, form)
    }

    saveImage(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/image/${id}`, form)
    }

    getSynonyms(id: number): Promise<AxiosResponse<Synonym[]>> {
      return request.get(`/${this.baseUrl}/synonyms/${id}`)
    }

    addSynonym(data: any): Promise<AxiosResponse<Synonym>> {
      return request.post(`/${this.baseUrl}/synonym`, data)
    }

    deleteSynonym(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/synonym/${id}`)
    }

    getTexts(language: string): Promise<AxiosResponse<Translate[]>> {
      return request.get(`/${language}/texts`)
    }

    saveExtra(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/extra`, data)
    }

    saveSentences(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/sentences`, data)
    }

    saveText(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}`, data)
    }

    publishText(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/publish`, data)
    }
  }
}
