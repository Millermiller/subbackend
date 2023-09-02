import Component from 'vue-class-component'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { Inject } from 'vue-typedi'
import { Order } from '@/app/Billing/Domain/Order'
import { OrderForm } from '@/app/Billing/Domain/OrderForm'
import OrderService from '@/app/Billing/Application/order.service'

@Component({
  components: {},
})
export default class ListOrdersComponent extends CRUDComponent<Order, OrderForm> {
  @Inject()
  protected readonly service: OrderService

  public search: string = ''

  protected buildForm(): OrderForm {
    return new OrderForm();
  }
}
