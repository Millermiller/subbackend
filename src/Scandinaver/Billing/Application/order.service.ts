import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Order } from '@/Scandinaver/Billing/Domain/Order'
import OrderRepository from '@/Scandinaver/Billing/Infrastructure/order.repository'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'

@Service()
export default class OrderService extends BaseService<Order> {
  @Inject()
  private readonly orderRepository: OrderRepository

  create(input: any): Promise<Order> | Order {
    return undefined;
  }

  destroy(entity: Order): Promise<void> {
    return Promise.resolve(undefined);
  }

  get(filters: FiltersData): Promise<Order[]> {
    return this.orderRepository.all(filters)
  }

  update(entity: Order, data: any): Promise<Order> {
    return Promise.resolve(undefined);
  }
}
