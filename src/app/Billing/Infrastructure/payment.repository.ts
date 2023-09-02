import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { Payment } from '@/app/Billing/Domain/Payment'
import { API } from '@/app/Billing/Infrastructure/api/payment.api'
import PaymentAPI = API.PaymentAPI

@Service()
export default class PaymentRepository extends CommonRepository<Payment> {
  @Inject()
  protected readonly api: PaymentAPI
}
