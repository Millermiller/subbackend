import Log from '@/app/Dashboard/Domain/Log'
import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { API } from '../../Core/Infrastructure/api/log.api'
import LogAPI = API.LogAPI

@Service()
export default class LogRepository extends CommonRepository<Log> {
  @Inject()
  protected readonly api: LogAPI
}
