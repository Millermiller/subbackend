import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { Order } from '@/Scandinaver/Billing/Domain/Order'
import { API } from '@/Scandinaver/Billing/Infrastructure/api/order.api'
import OrderAPI = API.OrderAPI

@Service()
export default class OrderRepository extends CommonRepository<Order> {
  @Inject()
  protected readonly api: OrderAPI
}
