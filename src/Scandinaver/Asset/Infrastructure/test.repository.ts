import { Inject, Service } from 'typedi'
import { Test } from '@/Scandinaver/Asset/Domain/Test'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from '@/Scandinaver/Asset/Infrastructure/api/test.api'
import TestAPI = API.TestAPI

@Service()
export default class TestRepository extends CommonRepository<Test> {
  @Inject()
  protected api: TestAPI

  async all(): Promise<Test[]> {
    return Promise.resolve([])
  }

  async one(id: number): Promise<Test> {
    throw new Error('method not implemented')
  }

  async create(data: any): Promise<Test> {
    throw new Error('Method not implemented.')
  }

  async save(entity: Test): Promise<Test> {
    throw new Error('method not implemented')
  }

  async getNextLevel(test: Test): Promise<Test> {
    return this.api.nextLevel(test).then(response => plainToClass(Test, response.data))
  }
}
