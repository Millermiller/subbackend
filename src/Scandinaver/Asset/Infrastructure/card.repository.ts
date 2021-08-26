import { Inject, Service } from 'typedi'
import { API } from './api/card.api'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { plainToClass } from 'class-transformer'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import CardApi = API.CardApi
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

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

  public async removeFromAsset(language: string, card: Card, asset: Asset): Promise<any> {
    return this.api.removeCard(language, card, asset).then(response => response)
  }
}
