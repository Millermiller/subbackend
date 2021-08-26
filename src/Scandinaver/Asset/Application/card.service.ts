import { Inject, Service } from 'typedi'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import CardRepository from '@/Scandinaver/Asset/Infrastructure/card.repository'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { API } from '../Infrastructure/api/card.api'
import CardApi = API.CardApi
import CardForm from '@/Scandinaver/Asset/Domain/CardForm'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

@Service()
export default class CardService extends BaseService<Card> {
  @Inject()
  private readonly cardRepository: CardRepository

  @Inject()
  private readonly api: CardApi

  public create(input: any): Promise<Card> {
    throw new Error('Method not implemented.')
  }

  public async update(card: Card, data: CardForm): Promise<Card> {
    return this.cardRepository.update(card, data)
  }

  public async addCardToAsset(card: Card, asset: Asset): Promise<Card> {
    const { language } = store.getters
    await this.cardRepository.add(language, card, asset)
    store.commit('addCard', card)
    return card
  }

  public async removeFromAsset(card: Card, asset: Asset): Promise<Card> {
    const { language } = store.getters
    await this.cardRepository.removeFromAsset(language, card, asset)
    await store.commit('removeCard', card)
    return card
  }

  public async createCard(card: Card): Promise<Card> {
    return this.cardRepository.create(card)
    // store.commit(INCREMENT_PERSONAL_COUNTER, card.id)
  }

  public async destroyCard(card: Card): Promise<void> {
    await this.cardRepository.delete(card)
    store.commit('removeCard', card)
  }

  public async uploadWordFile(fileUploadFormData: FormData): Promise<any> {
    const { language } = store.getters
    return this.api.uploadWordFile(language, fileUploadFormData)
  }

  public async addAdminCard(param: { isSentence: any; word: string; translate: string }): Promise<Card> {
    const card = new Card()
    card.term = new Word(param.word)
    card.translate = new Translate(param.translate)
    card.sentence = param.isSentence
    return this.cardRepository.create(card)
  }

  destroy(entity: Card): Promise<void> {
    return Promise.resolve(undefined);
  }

  getAll(): Promise<Card[]> {
    return Promise.resolve([]);
  }

  fromDTO(dto: CardForm): Card {
    const card = new Card()
    card.id = dto.id
    card.term = dto.term
    card.translate = dto.translate
    card.examples = dto.examples
    return card
  }
}
