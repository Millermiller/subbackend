import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { Order } from '@/Scandinaver/Billing/Domain/Order'

export class OrderForm extends EntityForm<Order> {
  fromDTO(): Order {
    return undefined;
  }
}
