import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { Payment } from '@/app/Billing/Domain/Payment'

export class PaymentForm extends EntityForm<Payment> {
  fromDTO(): Payment {
    return undefined;
  }
}
