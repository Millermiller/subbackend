import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import LogRepository from '@/Scandinaver/Dashboard/Infrastructure/log.repository'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

@Service()
export default class LogService extends BaseService<Log> {
  @Inject()
  private readonly repository: LogRepository

  public fromDTO(dto: EntityForm): Log {
    return undefined
  }

  public create(input: any): Log {
    return new Log()
  }

  public async getAll(): Promise<Log[]> {
    return this.repository.all()
  }

  public async destroy(log: Log): Promise<void> {
    return this.repository.delete(log)
  }

  update(entity: Log, data: any): Promise<Log> {
    return Promise.resolve(undefined);
  }
}
