import AssetRepository from '@/Scandinaver/Asset/Infrastructure/asset.repository'
import { Inject, Service } from 'typedi'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/forvoAPI'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import TranslateRepository from '@/Scandinaver/Asset/Infrastructure/translate.repository'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import ForvoAPI = API.ForvoAPI

@Service()
export default class AssetService extends BaseService<Asset> {
  @Inject()
  private repository: AssetRepository

  @Inject()
  private translateRepository: TranslateRepository

  @Inject()
  private forvoApi: ForvoAPI

  async create(type: number): Promise<Asset> {
    return this.repository.create(type)
  }

  public async reload(asset: Asset) {
    const data = await this.repository.one(asset.id)
    store.commit('setActiveAsset', data)
  }

  public async getAll(): Promise<any> {
    return this.repository.allByLanguage()
  }

  public async getAsset(assetId: number): Promise<any> {
    const asset = await this.repository.one(assetId)
    store.commit('setActiveAsset', asset)
  }

  public async updateAsset(asset: Asset, data: any) {
    await this.repository.update(asset.getId(), data)
    // store.commit(PATCH_PERSONAL, { asset: response.data, index: this.index })
  }

  public async destroyAsset(asset: Asset) {
    await this.repository.delete(asset.getId())
  }

  public async forvoAction(asset: Asset): Promise<{ count: number; all: number }> {
    return this.forvoApi.getAudio(asset.id).then(response => response.data)
  }

  async updateTitle(asset: Asset, title: string): Promise<Asset> {
    return this.repository.update(asset.getId(), { title })
  }

  async removeTranslate(data: Translate) {
    return this.translateRepository.delete(data)
  }

  async searchWords(query: string, sentence: boolean): Promise<Card[]> {
    return this.translateRepository.find(query, sentence)
  }

  async getSentences(): Promise<Card[]> {
    const { language } = store.getters
    return this.translateRepository.getSentences(language)
  }
}
