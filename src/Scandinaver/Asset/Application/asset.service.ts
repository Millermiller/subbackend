import AssetRepository from '@/Scandinaver/Asset/Infrastructure/asset.repository'
import { Inject, Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import TranslateRepository from '@/Scandinaver/Asset/Infrastructure/translate.repository'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import AssetDTO from '@/Scandinaver/Asset/Domain/AssetDTO'
import CardRepository from '@/Scandinaver/Asset/Infrastructure/card.repository'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/forvo.api'
import ForvoAPI = API.ForvoAPI

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

  public async create(data: AssetDTO): Promise<Asset> {
    data.language = store.getters.language
    return this.repository.create(data)
  }

  public async reload(asset: Asset): Promise<void> {
    const data = await this.repository.one(asset.id)
    store.commit('setActiveAsset', data)
  }

  public async getAll(): Promise<any> {
    return this.repository.allByLanguage()
  }

  public async getAsset(assetId: number): Promise<any> {
    return this.repository.one(assetId)
  }

  public async updateAsset(asset: Asset, data: any): Promise<void> {
    await this.repository.update(asset, data)
    // store.commit(PATCH_PERSONAL, { asset: response.data, index: this.index })
  }

  public async destroyAsset(asset: Asset): Promise<void> {
    await this.repository.delete(asset)
  }

  public async forvoAction(asset: Asset): Promise<{ count: number; all: number }> {
    return this.forvoApi.getAudio(asset.id).then(response => response.data)
  }

  public async updateTitle(asset: Asset, title: string): Promise<Asset> {
    return this.repository.update(asset, { title })
  }

  public async removeTranslate(data: Translate): Promise<void> {
    return this.translateRepository.delete(data.getId())
  }

  public async translate(query: string, sentence: boolean): Promise<Card[]> {
    return this.cardRepository.translate(query, sentence)
  }
}
