import { BaseService } from '@/app/Core/Application/base.service'
import Log from '@/app/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import LogRepository from '@/app/Dashboard/Infrastructure/log.repository'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class LogService extends BaseService<Log> {
  @Inject()
  private readonly repository: LogRepository

  public create(input: any): Log {
    return new Log()
  }

  public async get(filters: FiltersData): Promise<Log[]> {
    return this.repository.all(filters)
  }

  public async filter(filters: FiltersData): Promise<PaginatedResponse<Log>> {
    return this.repository.paginate(filters)
  }

  public async destroy(log: Log): Promise<void> {
    return this.repository.delete(log)
  }

  update(entity: Log, data: any): Promise<Log> {
    return Promise.resolve(undefined);
  }
}
