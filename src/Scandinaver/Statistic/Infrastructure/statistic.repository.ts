import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { Item } from '@/Scandinaver/Statistic/Domain/Item'
import { API } from '@/Scandinaver/Statistic/Infrastructure/api/statistic.api'
import StatisticAPI = API.StatisticAPI

@Service()
export default class SettingRepository extends CommonRepository<Item> {
  @Inject()
  protected readonly api: StatisticAPI
}
