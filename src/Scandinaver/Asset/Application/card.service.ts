import { Inject, Service } from 'typedi'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import CardRepository from '@/Scandinaver/Asset/Infrastructure/card.repository'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Term } from '@/Scandinaver/Asset/Domain/Term'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { API } from '../Infrastructure/api/card.api'
import CardApi = API.CardApi
import CardForm from '@/Scandinaver/Asset/Domain/CardForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class CardService extends BaseService<Card> {
  @Inject()
  private readonly cardRepository: CardRepository

  @Inject()
  private readonly api: CardApi

  get(filtersData: FiltersData): Promise<PaginatedResponse<Card>> {
    return this.cardRepository.paginate(filtersData)
  }

  public create(input: any): Promise<Card> {
    throw new Error('Method not implemented.')
  }

  public async update(card: Card, data: CardForm): Promise<Card> {
    return this.cardRepository.update(card, data)
  }

  destroy(entity: Card): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async addCardToAsset(card: Card, asset: Asset): Promise<Card> {
    const { language } = store.getters
    return await this.cardRepository.add(language, card, asset)
  }

  public async removeFromAsset(card: Card, asset: Asset): Promise<Card> {
    const { language } = store.getters
    await this.cardRepository.removeFromAsset(card, asset)

    const index = asset.cards.all().findIndex((item: any) => item.id === card.getId())
    asset.cards.all().splice(index, 1)

    return card
  }

  public async uploadWordFile(fileUploadFormData: FormData): Promise<any> {
    const { language } = store.getters
    return this.api.uploadWordFile(language, fileUploadFormData)
  }

  public async addAdminCard(param: { isSentence: any; word: string; translate: string }): Promise<Card> {
    const card = new Card()
    card.term = new Term(param.word)
    card.translate = new Translate(param.translate)
    card.sentence = param.isSentence
    return this.cardRepository.create(card)
  }
}
