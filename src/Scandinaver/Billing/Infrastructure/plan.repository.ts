import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from '@/Scandinaver/Billing/Infrastructure/api/plan.api'
import PlanAPI = API.PlanAPI
import Plan from '@/Scandinaver/Billing/Domain/Plan'

@Service()
export default class PlanRepository extends CommonRepository<Plan> {
  @Inject()
  protected readonly api: PlanAPI
}
