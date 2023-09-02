import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Item } from '@/app/Statistic/Domain/Item'

export namespace API {
  @Service()
  export class StatisticAPI extends BaseAPI<Item> {
    protected readonly type: ClassType<Item> = Item
    protected readonly baseUrl = 'statistic'
  }
}
