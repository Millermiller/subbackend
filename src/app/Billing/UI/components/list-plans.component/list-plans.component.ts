import Component from 'vue-class-component'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { Inject } from 'vue-typedi'
import Plan from '@/app/Billing/Domain/Plan'
import { PlanForm } from '@/app/Billing/Domain/PlanForm'
import PlanService from '@/app/Billing/Application/plan.service'

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
