import Component from 'vue-class-component'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { Inject } from 'vue-typedi'
import { Order } from '@/Scandinaver/Billing/Domain/Order'
import { OrderForm } from '@/Scandinaver/Billing/Domain/OrderForm'
import OrderService from '@/Scandinaver/Billing/Application/order.service'

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
