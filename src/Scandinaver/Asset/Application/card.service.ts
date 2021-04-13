import { Inject, Service } from 'typedi'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import CardRepository from '@/Scandinaver/Asset/Infrastructure/card.repository'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { AxiosResponse } from 'axios'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { API } from '../Infrastructure/api/card.api'
import CardApi = API.CardApi

@Service()
export default class CardService extends BaseService<Card> {
  @Inject()
  private cardRepository: CardRepository

  @Inject()
  private api: CardApi

  create(input: any): Promise<Card> {
    throw new Error('Method not implemented.')
  }

  async update(card: Card, data: any) {
    await this.cardRepository.update(card, data)
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

  public async destroyCard(card: Card) {
    await this.cardRepository.delete(card)
    store.commit('removeCard', card)
  }

  async addWord(form: IDictionaryForm) {
    return this.cardRepository.addWord(form)
  }

  async uploadWordFile(fileUploadFormData: FormData) {
    const { language } = store.getters
    return this.api.uploadWordFile(language, fileUploadFormData)
  }

  async addAdminCard(param: { isSentence: any; word: string; translate: string }) {
    const card = new Card()
    card.word = new Word(param.word)
    card.translate = new Translate(param.translate)
    card.sentence = param.isSentence
    return this.cardRepository.create(card)
  }
}
