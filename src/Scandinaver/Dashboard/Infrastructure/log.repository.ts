import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Core/Infrastructure/api/logAPI'
import LogAPI = API.LogAPI
import { plainToClass } from 'class-transformer'

@Service()
export default class LogRepository extends BaseRepository<Log> {

  @Inject()
  private api: LogAPI

  async all(): Promise<Log[]> {
    return this.api.all().then(response => plainToClass(Log, response.data))
  }

  async delete(entity: Log): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<Log> {
    return this.api.load(id).then(response => plainToClass(Log, response.data))
  }

  async save(entity: Log): Promise<Log> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Log, response.data))
  }
}
