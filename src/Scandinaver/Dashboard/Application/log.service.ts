import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import LogRepository from '@/Scandinaver/Dashboard/Infrastructure/log.repository'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

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
