import Log from '@/Scandinaver/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Core/Infrastructure/api/logAPI'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import LogAPI = API.LogAPI

@Service()
export default class LogRepository extends CommonRepository<Log> {
  @Inject()
  protected api: LogAPI
}
