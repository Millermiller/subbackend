import { Inject, Service } from 'typedi'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import CardRepository from '@/Scandinaver/Asset/Infrastructure/card.repository'
import FavouriteRepository from '@/Scandinaver/Asset/Infrastructure/favourite.repository'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { AxiosResponse } from 'axios'
import IDictionaryForm from '@/Scandinaver/Core/Domain/Contract/IDictionaryForm'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'

@Service()
export default class CardService extends BaseService<Card> {

  @Inject()
  private cardRepository: CardRepository

  @Inject()
  private favouriteRepository: FavouriteRepository

  create(input: any): Promise<Card> {
    throw new Error('Method not implemented.')
  }

  public async addCardToAsset(card: Card): Promise<Card> {
    const language = store.getters.language
    await this.cardRepository.add(language, card)
    store.commit('addCard', card)
    return card
  }

  public async removeFromAsset(card: Card, asset: Asset): Promise<Card> {
    const language = store.getters.language
    await this.cardRepository.removeFromAsset(language, card, asset)
    await store.commit('removeCard', card)
    return card
  }

  public async createCard(card: Card): Promise<Card> {
    return this.cardRepository.save(card)
    // store.commit(INCREMENT_PERSONAL_COUNTER, card.id)
  }

  public async destroyCard(card: Card) {
    await this.cardRepository.delete(card)
    store.commit('removeCard', card)
  }

  public async translate(word: string, sentence: boolean): Promise<AxiosResponse> {
    return this.cardRepository.translate(word, sentence)
  }

  async addWord(form: IDictionaryForm) {
    return this.cardRepository.addWord(form)
  }

  async uploadWordFile(fileUploadFormData: FormData) {
    return this.cardRepository.saveAudioFile(fileUploadFormData)
  }

  async addAdminCard(param: { issentence: boolean; word: string; translate: string }) {
    const card = new Card()
    card.word = new Word(param.word)
    card.translate = new Translate(param.translate)
    card.sentence = param.issentence
    return this.cardRepository.save(card)
  }
}
