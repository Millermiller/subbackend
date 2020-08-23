import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/translate.api'
import TranslateApi = API.TranslateApi
import { plainToClass } from 'class-transformer'

@Service()
export default class TranslateRepository extends BaseRepository<Translate> {

  @Inject()
  private api: TranslateApi

  all(): Promise<Translate[]> {
    throw new Error('method not implemented')
  }

  async delete(entity: Translate): Promise<any> {
    return this.api.destroy(entity.getId())
  }

  async one(id: number): Promise<Translate> {
    throw new Error('method not implemented')
  }

  async save(entity: Translate): Promise<Translate> {
    throw new Error('method not implemented')
  }

  async find(query: string, sentence: boolean): Promise<Translate[]> {
    return this.api.search(query, sentence).then(response => plainToClass(Translate, response.data))
  }

  async getSentences(): Promise<Translate[]> {
    return this.api.sentences().then(response => plainToClass(Translate, response.data))
  }
}
