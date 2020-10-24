import { Inject, Service } from 'typedi'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import { API } from '@/Scandinaver/Translate/Infrastructure/api/textAPI'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import { plainToClass } from 'class-transformer'
import TextAPI = API.TextAPI

@Service()
export default class SynonymRepository extends BaseRepository<Synonym> {
  @Inject()
  private api: TextAPI

  async all(): Promise<Synonym[]> {
    throw new Error('method not implemented')
  }

  async one(id: number): Promise<Synonym> {
    throw new Error('method not implemented')
  }

  async create(data: any): Promise<Synonym> {
    return this.api.addSynonym(data).then(response => plainToClass(Synonym, response.data))
  }

  async update(entity: Synonym, data: any): Promise<Synonym> {
    throw new Error('Method not implemented.')
  }

  async delete(entity: Synonym): Promise<any> {
    return this.api.deleteSynonym(entity.id)
  }

  async getByWord(word: Word): Promise<Synonym[]> {
    return this.api.getSynonyms(word.id).then(response => plainToClass(Synonym, response.data))
  }
}
