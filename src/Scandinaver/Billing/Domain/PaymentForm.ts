import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { Payment } from '@/Scandinaver/Billing/Domain/Payment'

export class PaymentForm extends EntityForm<Payment> {
  fromDTO(): Payment {
    return undefined;
  }
}
