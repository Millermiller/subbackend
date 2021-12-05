import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Item } from '@/Scandinaver/Statistic/Domain/Item'

export namespace API {
  @Service()
  export class StatisticAPI extends BaseAPI<Item> {
    protected readonly type: ClassType<Item> = Item
    protected readonly baseUrl = 'statistic'
  }
}
