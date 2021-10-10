import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { Payment } from '@/Scandinaver/Billing/Domain/Payment'
import { API } from '@/Scandinaver/Billing/Infrastructure/api/payment.api'
import PaymentAPI = API.PaymentAPI

@Service()
export default class PaymentRepository extends CommonRepository<Payment> {
  @Inject()
  protected readonly api: PaymentAPI
}
