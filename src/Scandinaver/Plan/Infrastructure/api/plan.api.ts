import { Service } from 'typedi'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class PlanAPI extends BaseAPI<Plan> {
    protected readonly type: ClassType<Plan>
    protected readonly baseUrl = 'plan'
  }
}
