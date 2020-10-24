import { Inject, Service } from 'typedi'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/cardAPI'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import CardApi = API.CardApi

@Service()
export default class FavouriteRepository extends BaseRepository<Card> {
  @Inject()
  private api: CardApi

  async all(): Promise<Card[]> {
    throw new Error('method not implemented')
  }

  async one(id: number): Promise<Card> {
    throw new Error('method not implemented')
  }

  async create(data: any): Promise<Card> {
    throw new Error('method not implemented')
  }

  async update(entity: Card, data: any): Promise<Card> {
    throw new Error('method not implemented')
  }

  async delete(card: Card): Promise<any> {
    throw new Error('method not implemented')
  }
}
