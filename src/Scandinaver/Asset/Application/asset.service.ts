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

  async create(type: any): Promise<Asset> {
    const asset = new Asset()
    asset.type = type
    return this.repository.save(asset)
  }

  public async reload(asset: Asset) {
    const data = await this.repository.one(asset.id)
    store.commit('setActiveAsset', data)
  }

  public async getAll(): Promise<any> {
    const { language } = store.getters
    return this.repository.allByLanguage(language)
  }

  public async getAsset(assetId: number): Promise<any> {
    const { language } = store.getters
    const asset = await this.repository.oneByLanguage(language, assetId)
    store.commit('setActiveAsset', asset)
  }

  public async updateAsset(asset: Asset, data: any) {
    await this.repository.update(asset, data)
    // store.commit(PATCH_PERSONAL, { asset: response.data, index: this.index })
  }

  public async destroyAsset(asset: Asset) {
    const { language } = store.getters
    await this.repository.destroy(language, asset)
  }

  public async forvoAction(asset: Asset): Promise<{ count: number; all: number }> {
    return this.forvoApi.getAudio(asset.id).then(response => response.data)
  }

  async updateTitle(asset: Asset, title: string): Promise<Asset> {
    asset.title = title
    return this.repository.save(asset)
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
