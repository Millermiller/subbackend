import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import LogRepository from '@/Scandinaver/Dashboard/Infrastructure/log.repository'

@Service()
export default class LogService extends BaseService<Log> {

  @Inject()
  private repository: LogRepository

  create(input: any): Log {
    return new Log('message');
  }

  async getAll(): Promise<Log[]> {
    return this.repository.all()
  }

  async destroy(log: Log) {
    return this.repository.delete(log)
  }
}
