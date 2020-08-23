import { Inject, Service } from 'typedi'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import { API } from '@/Scandinaver/Translate/Infrastructure/api/textAPI'
import TextAPI = API.TextAPI
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import { plainToClass } from 'class-transformer'

@Service()
export default class SentenceRepository extends BaseRepository<any> {
  @Inject()
  private api: TextAPI

  async all(): Promise<Synonym[]> {
    throw new Error('method not implemented')
  }

  async delete(entity: Synonym): Promise<any> {
    throw new Error('method not implemented')
  }

  async one(id: number): Promise<Synonym> {
    throw new Error('method not implemented')
  }

  async save(entity: Synonym): Promise<Synonym> {
    return this.api.addSynonym(entity).then(response => plainToClass(Synonym, response.data))
  }

  async getByWord(word: Word): Promise<Synonym[]> {
    throw new Error('method not implemented')
  }
}
