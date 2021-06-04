import { Component, Vue } from 'vue-property-decorator'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject } from 'vue-typedi'
import PlanService from '@/Scandinaver/Plan/Application/plan.service'

@Component({
  components: {},
})
export default class AddPlanComponent extends Vue {
  @Inject()
  private readonly service: PlanService

  public plan: Plan = new Plan()

  public back(): void {
    this.$router.go(-1)
  }

  public async save(): Promise<void> {
    await this.service.create(this.plan)
    this.$router.go(-1)
  }
}
