import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Inject, Service } from 'typedi'
import PlanRepository from '@/Scandinaver/Billing/Infrastructure/plan.repository'
import Plan from '@/Scandinaver/Billing/Domain/Plan'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'

@Service()
export default class PlanService extends BaseService<Plan> {
  @Inject()
  private readonly repository: PlanRepository

  public async create(input: any): Promise<Plan> {
    return this.repository.create(input)
  }

  public async get(filters: FiltersData): Promise<Plan[]> {
    return this.repository.all(filters)
  }

  public async getOne(id: number): Promise<Plan> {
    return this.repository.one(id)
  }

  public async destroy(plan: Plan) {
    return this.repository.delete(plan)
  }

  public async update(plan: Plan): Promise<Plan> {
    return this.repository.update(plan, plan)
  }
}
