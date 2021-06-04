import { Component, Vue } from 'vue-property-decorator'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject } from 'vue-typedi'
import PlanService from '@/Scandinaver/Plan/Application/plan.service'

@Component({
  components: {},
})
export default class EditPlanComponent extends Vue {
  @Inject()
  private readonly service: PlanService

  public plan: Plan = new Plan()

  async mounted(): Promise<void> {
    await this.load(Number(this.$route.params.id))
  }

  private async load(id: number): Promise<void> {
    this.plan = await this.service.getOne(id)
  }

  public back(): void {
    this.$router.go(-1)
  }

  public async save(): Promise<void> {
    await this.service.update(this.plan)
    this.$router.go(-1)
  }
}
