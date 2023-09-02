import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { Order } from '@/app/Billing/Domain/Order'
import { API } from '@/app/Billing/Infrastructure/api/order.api'
import OrderAPI = API.OrderAPI

@Service()
export default class OrderRepository extends CommonRepository<Order> {
  @Inject()
  protected readonly api: OrderAPI
}
