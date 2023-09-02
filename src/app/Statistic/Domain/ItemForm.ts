import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { Item } from '@/app/Statistic/Domain/Item'

export class ItemForm extends EntityForm<Item> {
  type: string

  fromDTO(): Item {
    return undefined;
  }
}
