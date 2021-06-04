import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Passing from '@/Scandinaver/Test/Domain/Passing'
import { Inject, Service } from 'typedi'
import PassingRepository from '@/Scandinaver/Test/Infrastructure/passing.repository'

@Service()
export default class PassingService extends BaseService<Passing> {
  @Inject()
  private readonly passingRepository: PassingRepository

  public async create(input: any): Promise<Passing> {
    return new Passing();
  }

  public async getAll(): Promise<Passing[]> {
    return this.passingRepository.all()
  }

  public async destroy(passing: Passing) {
    return this.passingRepository.delete(passing)
  }

  public async update(passing: Passing, data: any): Promise<Passing> {
    return this.passingRepository.update(passing, data)
  }
}
