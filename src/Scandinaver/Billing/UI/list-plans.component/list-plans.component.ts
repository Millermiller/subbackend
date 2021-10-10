import Component from 'vue-class-component'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { Inject } from 'vue-typedi'
import Plan from '@/Scandinaver/Billing/Domain/Plan'
import { PlanForm } from '@/Scandinaver/Billing/Domain/PlanForm'
import PlanService from '@/Scandinaver/Billing/Application/plan.service'

@Component({
  components: {},
})
export default class ListPlansComponent extends CRUDComponent<Plan, PlanForm> {
  @Inject()
  protected readonly service: PlanService

  public search: string = ''

  protected buildForm(): PlanForm {
    return new PlanForm();
  }
}
