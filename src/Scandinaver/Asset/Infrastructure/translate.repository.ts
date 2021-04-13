import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/translate.api'
import TranslateApi = API.TranslateApi
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

@Service()
export default class TranslateRepository extends CommonRepository<Translate> {
  @Inject()
  protected api: TranslateApi
}
