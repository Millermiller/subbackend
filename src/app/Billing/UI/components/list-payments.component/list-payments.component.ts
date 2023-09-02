import Component from 'vue-class-component'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { Inject } from 'vue-typedi'
import { Payment } from '@/app/Billing/Domain/Payment'
import { PaymentForm } from '@/app/Billing/Domain/PaymentForm'
import PaymentService from '@/app/Billing/Application/payment.service'

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
