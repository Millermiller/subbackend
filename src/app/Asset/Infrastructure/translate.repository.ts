import Translate from '@/app/Asset/Domain/Translate'
import { Inject, Service } from 'typedi'
import { API } from '@/app/Asset/Infrastructure/api/translate.api'
import TranslateApi = API.TranslateApi
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'

@Service()
export default class TranslateRepository extends CommonRepository<Translate> {
  @Inject()
  protected readonly api: TranslateApi
}
