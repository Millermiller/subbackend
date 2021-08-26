import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

export namespace API {
  @Service()
  export class TextAPI extends BaseAPI<Translate> {
    protected readonly type: ClassType<Translate> = Translate
    protected readonly baseUrl = 'text'

    public async all(): Promise<AxiosResponse> {
      return request.get(`/${this.baseUrl}`)
    }

    public async one(id: number): Promise<AxiosResponse<Translate>> {
      return request.get(`/${this.baseUrl}/${id}`)
    }

    public async create(form: any): Promise<AxiosResponse<Translate>> {
      return request.post(`/${this.baseUrl}`, form)
    }

    public async update(id: string | number, data: any): Promise<AxiosResponse<Translate>> {
      return request.put(`/${this.baseUrl}/${id}`, data)
    }

    public async delete(id: string | number): Promise<any> {
      return request.delete(`/${this.baseUrl}/${id}`)
    }

    public async search(data: any): Promise<AxiosResponse<Translate[]>> {
      throw new Error('Method not implemented.');
    }

    public async saveDescription(id: number, form: any): Promise<AxiosResponse> {
      return request.put(`/${this.baseUrl}/description/${id}`, form)
    }

    public async saveImage(id: number, form: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/image/${id}`, form)
    }

    public async getSynonyms(id: number): Promise<AxiosResponse<Synonym[]>> {
      return request.get(`/${this.baseUrl}/synonyms/${id}`)
    }

    public async addSynonym(data: any): Promise<AxiosResponse<Synonym>> {
      return request.post(`/${this.baseUrl}/synonym`, data)
    }

    public async deleteSynonym(id: number): Promise<AxiosResponse> {
      return request.delete(`/${this.baseUrl}/synonym/${id}`)
    }

    public async getTexts(language: string): Promise<AxiosResponse<Translate[]>> {
      return request.get(`/${this.baseUrl}`, {
        params: {
          lang: language
        },
      })
    }

    public async saveTooltips(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/tooltip`, data)
    }

    public async saveSentences(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/sentences`, data)
    }

    public async saveText(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}`, data)
    }

    public async publishText(data: any): Promise<AxiosResponse> {
      return request.post(`/${this.baseUrl}/publish`, data)
    }
  }
}
