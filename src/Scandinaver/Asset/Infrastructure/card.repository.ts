import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/cardAPI'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { plainToClass } from 'class-transformer'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import CardApi = API.CardApi
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'

@Service()
export default class CardRepository extends BaseRepository<Card> {
  @Inject()
  private api: CardApi

  public async all(): Promise<Card[]> {
    throw new Error('method not implemented')
  }

  public async one(id: number): Promise<Card> {
    throw new Error('method not implemented')
  }

  public async delete(card: Card): Promise<any> {
    return this.api.destroyCard(card).then(response => response)
  }

  public async save(card: Card): Promise<Card> {
    return this.api.createCard(card).then(response => plainToClass(Card, response.data))
  }

  public async translate(word: string, sentence: boolean) {
    return this.api.translate(word, sentence).then(response => response)
  }

  public async addWord(form: IDictionaryForm) {
    return this.api.addWord(form).then(response => plainToClass<Card, Card>(Card, response.data))
  }

  public async saveAudioFile(fileUploadFormData: FormData) {
    return this.api.uploadWordFile(fileUploadFormData)
  }

  public async add(language: string, card: Card): Promise<Card> {
    return this.api
      .addCardToAsset(language, card)
      .then(response => plainToClass(Card, response.data))
  }

  async removeFromAsset(language: string, card: Card, asset: Asset): Promise<any> {
    return this.api.removeCard(language, card, asset).then(response => response)
  }
}
