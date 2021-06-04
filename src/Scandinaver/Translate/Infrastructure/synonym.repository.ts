import { Inject, Service } from 'typedi'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from '@/Scandinaver/Translate/Infrastructure/api/synonym.api'
import SynonymAPI = API.SynonymAPI

@Service()
export default class SynonymRepository extends CommonRepository<Synonym> {
  @Inject()
  protected readonly api: SynonymAPI

  public async all(): Promise<Synonym[]> {
    throw new Error('method not implemented')
  }

  public async one(id: number): Promise<Synonym> {
    throw new Error('method not implemented')
  }

  public async update(entity: Synonym, data: any): Promise<Synonym> {
    throw new Error('Method not implemented.')
  }

  public async getByWord(word: Word): Promise<Synonym[]> {
    throw new Error('Method not implemented.')
  }
}
