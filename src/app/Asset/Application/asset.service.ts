import AssetRepository from '@/app/Asset/Infrastructure/asset.repository'
import { Inject, Service } from 'typedi'
import { Asset } from '@/app/Asset/Domain/Asset'
import { store } from '@/app/Core/Infrastructure/store'
import { BaseService } from '@/app/Core/Application/base.service'
import TranslateRepository from '@/app/Asset/Infrastructure/translate.repository'
import { Card } from '@/app/Asset/Domain/Card'
import AssetDTO from '@/app/Asset/Domain/DTO/AssetDTO'
import CardRepository from '@/app/Asset/Infrastructure/card.repository'
import { API } from '@/app/Asset/Infrastructure/api/forvo.api'
import ForvoAPI = API.ForvoAPI
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class AssetService extends BaseService<Asset> {
  @Inject()
  private readonly repository: AssetRepository

  @Inject()
  private readonly translateRepository: TranslateRepository

  @Inject()
  private readonly cardRepository: CardRepository

  @Inject()
  private readonly forvoApi: ForvoAPI

  public async get(filterData: FiltersData): Promise<PaginatedResponse<Asset>> {
    return this.repository.paginate(filterData)
  }

  public async create(data: AssetDTO): Promise<Asset> {
    data.language = store.getters.language.letter
    return this.repository.create(data)
  }

  public async update(asset: Asset, data: any): Promise<Asset> {
    return this.repository.update(asset, data)
    // store.commit(PATCH_PERSONAL, { asset: response.data, index: this.index })
  }

  public async destroy(asset: Asset): Promise<void> {
    await this.repository.delete(asset)
  }

  public async forvoAction(asset: Asset): Promise<{ count: number; all: number }> {
    return this.forvoApi.getAudio(asset.id).then(response => response.data)
  }

  public async translate(query: string, sentence: boolean): Promise<Card[]> {
    return this.cardRepository.translate(query, sentence)
  }

  public async random(count: number): Promise<Card[]> {
    return this.cardRepository.random(count)
  }

  async setSort(asset: Asset): Promise<Asset> {
    return this.repository.update(asset, asset.toDTO())
  }
}
