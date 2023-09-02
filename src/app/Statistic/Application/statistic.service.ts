import { Inject, Service } from 'typedi'
import { BaseService } from '@/app/Core/Application/base.service'
import { Item } from '@/app/Statistic/Domain/Item'
import SettingRepository from '@/app/Statistic/Infrastructure/statistic.repository'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class StatisticService extends BaseService<Item> {
  @Inject()
  private readonly statisticRepository: SettingRepository

  public async create(input: any): Promise<Item> {
    return new Item();
  }

  public async destroy(entity: Item): Promise<void> {
    return this.statisticRepository.delete(entity)
  }

  public async get(filters: FiltersData): Promise<PaginatedResponse<Item>> {
    return this.statisticRepository.paginate(filters)
  }

  public async update(entity: Item, data: any): Promise<Item> {
    return Promise.resolve(undefined);
  }
}
