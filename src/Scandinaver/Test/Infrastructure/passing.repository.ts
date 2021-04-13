import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import Passing from '@/Scandinaver/Test/Domain/Passing'
import { Inject, Service } from 'typedi'
import { API } from './api/passing.api'
import PassingAPI = API.PassingAPI

@Service()
export default class PassingRepository extends CommonRepository<Passing> {
  @Inject()
  protected api: PassingAPI
}
