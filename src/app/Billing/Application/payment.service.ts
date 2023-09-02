import { Inject, Service } from 'typedi'
import { BaseService } from '@/app/Core/Application/base.service'
import { Order } from '@/app/Billing/Domain/Order'
import { Payment } from '@/app/Billing/Domain/Payment'
import PaymentRepository from '@/app/Billing/Infrastructure/payment.repository'
import { FiltersData } from '@/app/Core/Application/FiltersData'

@Service()
export default class PaymentService extends BaseService<Payment> {
  @Inject()
  private readonly paymentRepository: PaymentRepository

  create(input: any): Promise<Payment> | Payment {
    return undefined;
  }

  destroy(entity: Payment): Promise<void> {
    return Promise.resolve(undefined);
  }

  get(filters: FiltersData): Promise<Payment[]> {
    return this.paymentRepository.all(filters)
  }

  update(entity: Order, data: any): Promise<Order> {
    return Promise.resolve(undefined);
  }
}
