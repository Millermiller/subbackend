import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { Item } from '@/app/Statistic/Domain/Item'
import { API } from '@/app/Statistic/Infrastructure/api/statistic.api'
import StatisticAPI = API.StatisticAPI

@Service()
export default class SettingRepository extends CommonRepository<Item> {
  @Inject()
  protected readonly api: StatisticAPI
}
