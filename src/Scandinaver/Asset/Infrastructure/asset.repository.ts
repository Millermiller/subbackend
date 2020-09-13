import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/assetAPI'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import AssetApi = API.AssetApi

@Service()
export default class AssetRepository extends BaseRepository<Asset> {

  @Inject()
  private api: AssetApi

  public all(): Promise<Asset[]> {
    throw new Error("Method not implemented.");
  }

  public delete(): Promise<Asset[]> {
    throw new Error("Method not implemented.");
  }

  async one(id: number): Promise<Asset> {
    throw new Error("Method not implemented.");
  }

  public async allByLanguage(language: string): Promise<{ words: Asset[], sentences: Asset[]}> {
    return this.api.getAssets(language).then(response => {
      return {
        words: plainToClass(Asset, response.data.words),
        sentences: plainToClass(Asset, response.data.sentences)
      }
    })
  }

  public async oneByLanguage(language: string, assetId: number): Promise<Asset> {
    return this.api.getAsset(language, assetId).then(response => plainToClass(Asset, response.data))
  }

  public async update(asset: Asset, data: any) {
    return this.api.updateAsset(asset, data).then(response => response)
  }

  public async destroy(language: string, asset: Asset): Promise<any> {
    return this.api.destroyAsset(language, asset).then(response => response)
  }

  public async save(asset: Asset): Promise<any> {
    return this.api.save(asset).then(response => response)
  }
}
