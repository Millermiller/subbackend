import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Service } from 'typedi'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'

export namespace API {
  @Service()
  export class TextAPI {

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

    getText(id: number): Promise<AxiosResponse> {
      return request.get(`/text/${id}`)
    }

    getTexts(): Promise<AxiosResponse> {
      return request.get('/texts')
    }

    saveExtra(data: any): Promise<AxiosResponse> {
      return request.post('/text/extra', data)
    }

    saveSentences(data: any): Promise<AxiosResponse> {
      return request.post('/text/sentences', data)
    }

    deleteText(id: number): Promise<AxiosResponse> {
      return request.delete(`/text/${id}`)
    }

    saveText(data: any): Promise<AxiosResponse> {
      return request.post('/text', data)
    }

    publishText(data: any): Promise<AxiosResponse> {
      return request.post('/text/publish', data)
    }

    all(): Promise<AxiosResponse> {
      return request.get(`/text`)
    }

    load(id: number): Promise<AxiosResponse> {
      return request.get(`/text/${id}`)
    }

    save(id: number, form: any): Promise<AxiosResponse<Translate>> {
      return request.put(`/text/${id}`, form)
    }

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/text/${id}`)
    }

    create(form: any): Promise<AxiosResponse<Translate>> {
      return request.post('/text', form)
    }
  }
}
