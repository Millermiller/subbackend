import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import Plan from '@/Scandinaver/Billing/Domain/Plan'

export namespace API {
  @Service()
  export class PlanAPI extends BaseAPI<Plan> {
    protected readonly type: ClassType<Plan>
    protected readonly baseUrl = 'plan'
  }
}
