import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { API } from '@/app/Billing/Infrastructure/api/plan.api'
import PlanAPI = API.PlanAPI
import Plan from '@/app/Billing/Domain/Plan'

@Service()
export default class PlanRepository extends CommonRepository<Plan> {
  @Inject()
  protected readonly api: PlanAPI
}
