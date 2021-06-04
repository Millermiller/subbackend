import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject, Service } from 'typedi'
import PlanRepository from '@/Scandinaver/Plan/Infrastructure/plan.repository'

@Service()
export default class PlanService extends BaseService<Plan> {
  @Inject()
  private readonly repository: PlanRepository

  public async create(input: any): Promise<Plan> {
    return this.repository.create(input)
  }

  public async getAll(): Promise<Plan[]> {
    return this.repository.all()
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
