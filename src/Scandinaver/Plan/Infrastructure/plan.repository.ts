import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Plan/Infrastructure/api/planAPI'
import { plainToClass } from 'class-transformer'
import PlanAPI = API.PlanAPI

@Service()
export default class PlanRepository extends BaseRepository<Plan> {
  @Inject()
  private api: PlanAPI

  async all(): Promise<Plan[]> {
    return this.api.all().then(response => plainToClass(Plan, response.data))
  }

  async one(id: number): Promise<Plan> {
    return this.api.load(id).then(response => plainToClass(Plan, response.data))
  }

  async create(data: any): Promise<Plan> {
    return this.api.create(data).then(response => plainToClass(Plan, response.data))
  }

  async update(entity: Plan, data: any): Promise<Plan> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Plan, response.data))
  }

  async delete(entity: Plan): Promise<any> {
    return this.api.destroy(entity.id)
  }
}
