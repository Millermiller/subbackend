import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Order } from '@/Scandinaver/Billing/Domain/Order'
import { Payment } from '@/Scandinaver/Billing/Domain/Payment'
import PaymentRepository from '@/Scandinaver/Billing/Infrastructure/payment.repository'
import { PaymentForm } from '@/Scandinaver/Billing/Domain/PaymentForm'

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

  fromDTO(dto: PaymentForm): Payment {
    return undefined;
  }

  getAll(): Promise<Payment[]> {
    return this.paymentRepository.all()
  }

  update(entity: Order, data: any): Promise<Order> {
    return Promise.resolve(undefined);
  }
}