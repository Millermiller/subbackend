import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/assetAPI'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import AssetApi = API.AssetApi

@Service()
export default class AssetRepository extends BaseRepository<Asset> {
  @Inject()
  private api: AssetApi

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

  public async update(asset: Asset, data: any): Promise<Asset> {
    return this.api.updateAsset(asset, data).then(response => plainToClass(Asset, response.data))
  }

  public async delete(asset: Asset): Promise<any> {
    const { language } = store.getters
    return this.api.destroyAsset(language, asset).then(response => response)
  }

  public async allByLanguage(): Promise<{ words: Asset[]; sentences: Asset[] }> {
    const { language } = store.getters
    return this.api.getAssets(language).then(response => ({
      words: plainToClass(Asset, response.data.words),
      sentences: plainToClass(Asset, response.data.sentences),
    }))
  }
}
