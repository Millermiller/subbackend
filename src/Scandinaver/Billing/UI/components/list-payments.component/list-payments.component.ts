import Component from 'vue-class-component'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { Inject } from 'vue-typedi'
import { Payment } from '@/Scandinaver/Billing/Domain/Payment'
import { PaymentForm } from '@/Scandinaver/Billing/Domain/PaymentForm'
import PaymentService from '@/Scandinaver/Billing/Application/payment.service'

@Component({
  components: {},
})
export default class ListPaymentsComponent extends CRUDComponent<Payment, PaymentForm> {
  @Inject()
  protected readonly service: PaymentService

  public search: string = ''

  protected buildForm(): PaymentForm {
    return new PaymentForm();
  }
}
