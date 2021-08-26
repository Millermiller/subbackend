import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject, Service } from 'typedi'
import { API } from './api/plan.api'
import PlanAPI = API.PlanAPI
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

@Service()
export default class PlanRepository extends CommonRepository<Plan> {
  @Inject()
  protected readonly api: PlanAPI
}
