import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { Item } from '@/Scandinaver/Statistic/Domain/Item'

export class ItemForm extends EntityForm<Item> {
  type: string

  fromDTO(): Item {
    return undefined;
  }
}
