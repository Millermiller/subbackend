import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Passing from '@/Scandinaver/Test/Domain/Passing'
import { Inject, Service } from 'typedi'
import PassingRepository from '@/Scandinaver/Test/Infrastructure/passing.repository'

@Service()
export default class PassingService extends BaseService<Passing> {
  @Inject()
  private passingRepository: PassingRepository

  create(input: any): Promise<Passing> | Passing {
    return new Passing();
  }

  async getAll(): Promise<Passing[]> {
    return this.passingRepository.all()
  }

  async destroy(passing: Passing) {
    return this.passingRepository.delete(passing.getId())
  }

  async update(passingId: number|string, passing: any): Promise<Passing> {
    return this.passingRepository.update(passingId, passing)
  }
}
