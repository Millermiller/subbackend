import { Service } from 'typedi'
import { BaseAPI } from '@/app/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Payment } from '@/app/Billing/Domain/Payment'

export namespace API {
  @Service()
  export class PaymentAPI extends BaseAPI<Payment> {
    protected readonly type: ClassType<Payment> = Payment
    protected readonly baseUrl = 'payment'
  }
}
