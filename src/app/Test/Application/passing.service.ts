import { BaseService } from '@/app/Core/Application/base.service'
import Passing from '@/app/Test/Domain/Passing'
import { Inject, Service } from 'typedi'
import PassingRepository from '@/app/Test/Infrastructure/passing.repository'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class PassingService extends BaseService<Passing> {
  @Inject()
  private readonly passingRepository: PassingRepository

  public async create(input: any): Promise<Passing> {
    return new Passing();
  }

  public async get(filters: FiltersData): Promise<PaginatedResponse<Passing>> {
    return this.passingRepository.paginate(filters)
  }

  public async filter(filters: FiltersData): Promise<PaginatedResponse<Passing>> {
    return this.passingRepository.paginate(filters)
  }

  public async destroy(passing: Passing) {
    return this.passingRepository.delete(passing)
  }

  public async update(passing: Passing, data: any): Promise<Passing> {
    return this.passingRepository.update(passing, data)
  }
}
