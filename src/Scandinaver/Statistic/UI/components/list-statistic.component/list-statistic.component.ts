import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { Item } from '@/Scandinaver/Statistic/Domain/Item'
import { ItemForm } from '@/Scandinaver/Statistic/Domain/ItemForm'
import StatisticService from '@/Scandinaver/Statistic/Application/statistic.service'

@Component({
  components: {},
})
export default class ListStatisticComponent extends CRUDComponent<Item, ItemForm> {
  @Inject()
  protected readonly service: StatisticService

  protected modalTitleUpdate = this.$root.$tc('updateStatistic')

  protected buildForm(): ItemForm {
    return new ItemForm()
  }
}
