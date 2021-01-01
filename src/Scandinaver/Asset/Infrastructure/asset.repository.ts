import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/assetAPI'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import AssetApi = API.AssetApi
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

@Service()
export default class AssetRepository extends CommonRepository<Asset> {
  @Inject()
  protected api: AssetApi

  public all(): Promise<Asset[]> {
    throw new Error('Method not implemented.')
  }

  async one(assetId: number): Promise<Asset> {
    return this.api.one(assetId).then(response => plainToClass(Asset, response.data))
  }

  public async create(type: number): Promise<any> {
    const { language } = store.getters
    return this.api.addAsset(language, type).then(response => response)
  }

  public async allByLanguage(): Promise<{ words: Asset[]; sentences: Asset[] }> {
    const { language } = store.getters
    return this.api.getAssets(language).then(response => ({
      words: plainToClass(Asset, response.data.words),
      sentences: plainToClass(Asset, response.data.sentences),
    }))
  }
}
