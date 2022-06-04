import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Item } from '@/Scandinaver/Statistic/Domain/Item'
import SettingRepository from '@/Scandinaver/Statistic/Infrastructure/statistic.repository'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class StatisticService extends BaseService<Item> {
  @Inject()
  private readonly statisticRepository: SettingRepository

  create(input: any): Promise<Item> | Item {
    return new Item();
  }

  destroy(entity: Item): Promise<void> {
    return this.statisticRepository.delete(entity)
  }

  get(filters: FiltersData): Promise<Item[]> {
    return this.statisticRepository.all(filters)
  }

  public async filter(filters: FiltersData): Promise<PaginatedResponse<Item>> {
    return this.statisticRepository.paginate(filters)
  }

  update(entity: Item, data: any): Promise<Item> {
    return Promise.resolve(undefined);
  }
}
