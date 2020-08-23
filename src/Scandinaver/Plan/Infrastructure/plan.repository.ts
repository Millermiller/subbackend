import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Plan/Infrastructure/api/planAPI'
import PlanAPI = API.PlanAPI
import { plainToClass } from 'class-transformer'

@Service()
export default class PlanRepository extends BaseRepository<Plan> {

  @Inject()
  private api: PlanAPI

  async all(): Promise<Plan[]> {
    return this.api.all().then(response => plainToClass(Plan, response.data))
  }

  async delete(entity: Plan): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<Plan> {
    return this.api.load(id).then(response => plainToClass(Plan, response.data))
  }

  async save(entity: Plan): Promise<Plan> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Plan, response.data))
  }
}
