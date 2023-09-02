import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import Passing from '@/app/Test/Domain/Passing'
import { Inject, Service } from 'typedi'
import { API } from './api/passing.api'
import PassingAPI = API.PassingAPI

@Service()
export default class PassingRepository extends CommonRepository<Passing> {
  @Inject()
  protected readonly api: PassingAPI
}
