import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { Order } from '@/app/Billing/Domain/Order'

export class OrderForm extends EntityForm<Order> {
  fromDTO(): Order {
    return undefined;
  }
}
