import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { Item } from '@/app/Statistic/Domain/Item'
import { ItemForm } from '@/app/Statistic/Domain/ItemForm'
import StatisticService from '@/app/Statistic/Application/statistic.service'

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
