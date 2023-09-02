import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Order } from '@/app/Billing/Domain/Order'

export namespace API {
  @Service()
  export class OrderAPI extends BaseAPI<Order> {
    protected readonly type: ClassType<Order> = Order
    protected readonly baseUrl = 'order'
  }
}
