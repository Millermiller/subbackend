import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Plan from '@/app/Billing/Domain/Plan'

export class PlanForm extends EntityForm<Plan> {
  fromDTO(): Plan {
    return undefined;
  }
}
