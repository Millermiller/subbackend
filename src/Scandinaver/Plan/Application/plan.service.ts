import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject, Service } from 'typedi'
import PlanRepository from '@/Scandinaver/Plan/Infrastructure/plan.repository'

@Service()
export default class PlanService extends BaseService<Plan> {
  @Inject()
  private repository: PlanRepository

  create(input: any): Promise<Plan> | Plan {
    return this.repository.create(input)
  }

  async getAll(): Promise<Plan[]> {
    return this.repository.all()
  }

  async getOne(id: number): Promise<Plan> {
    return this.repository.one(id)
  }

  async destroy(plan: Plan) {
    return this.repository.delete(plan)
  }

  async update(plan: Plan): Promise<Plan> {
    return this.repository.update(plan, plan)
  }
}
