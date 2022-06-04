import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Plan from '@/Scandinaver/Billing/Domain/Plan'

export class PlanForm extends EntityForm<Plan> {
  fromDTO(): Plan {
    return undefined;
  }
}
