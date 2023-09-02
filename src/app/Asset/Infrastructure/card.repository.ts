import { Inject, Service } from 'typedi'
import { API } from './api/card.api'
import { Card } from '@/app/Asset/Domain/Card'
import IDictionaryForm from '@/app/Core/Domain/Contract/IDictionaryForm'
import { plainToClass } from 'class-transformer'
import { Asset } from '@/app/Asset/Domain/Asset'
import CardApi = API.CardApi
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'

@Service()
export default class CardRepository extends CommonRepository<Card> {
  @Inject()
  protected readonly api: CardApi

  public async translate(word: string, sentence: boolean): Promise<Card[]> {
    return this.api.translate(word, sentence).then(response => plainToClass(Card, response.data))
  }

  public async addWord(form: IDictionaryForm): Promise<Card> {
    return this.api.addWord(form).then(response => plainToClass<Card, Card>(Card, response.data))
  }

  public async add(language: string, card: Card, asset: Asset): Promise<Card> {
    return this.api.addCardToAsset(language, card, asset).then(response => plainToClass(Card, response.data))
  }

  public async removeFromAsset(card: Card, asset: Asset): Promise<any> {
    return this.api.removeCard(card, asset).then(response => response)
  }

  public async random(count: number): Promise<Card[]> {
    return this.api.random(count).then(response => plainToClass(Card, response.data))
  }
}
