import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/asset.api'
import AssetApi = API.AssetApi

@Service()
export default class AssetRepository extends CommonRepository<Asset> {
  @Inject()
  protected api: AssetApi

  public all(): Promise<Asset[]> {
    throw new Error('Method not implemented.')
  }

  public async allByLanguage(): Promise<{ words: Asset[]; sentences: Asset[] }> {
    const { language } = store.getters
    return this.api.getAssets(language).then(response => ({
      words: plainToClass(Asset, response.data.words),
      sentences: plainToClass(Asset, response.data.sentences),
    }))
  }
}
