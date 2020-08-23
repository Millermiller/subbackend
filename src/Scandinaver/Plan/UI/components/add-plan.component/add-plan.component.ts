import { Component, Vue } from 'vue-property-decorator'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject } from 'vue-typedi'
import PlanService from '@/Scandinaver/Plan/Application/plan.service'

@Component({
  components: {},
})
export default class AddPlanComponent extends Vue {
  @Inject()
  private service: PlanService

  plan: Plan

  back() {
    this.$router.go(-1)
  }

  async save() {
    await this.service.create(this.plan)
    this.$router.go(-1)
  }
}
