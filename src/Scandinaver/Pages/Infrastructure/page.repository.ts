import { Inject, Service } from 'typedi'
import Page from '@/Scandinaver/Pages/Domain/Page'
import { API } from './api/meta.api'
import MetaAPI = API.MetaAPI
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

@Service()
export default class PageRepository extends CommonRepository<Page> {
  @Inject()
  protected readonly api: MetaAPI
}
