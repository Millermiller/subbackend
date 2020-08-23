import { Component, Vue } from 'vue-property-decorator'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import { Inject } from 'vue-typedi'
import PlanService from '@/Scandinaver/Plan/Application/plan.service'

@Component({
  components: {},
})
export default class EditPlanComponent extends Vue {
  @Inject()
  private service: PlanService

  plan: Plan

  mounted() {
    this.load(Number(this.$route.params.id))
  }

  async load(id: number) {
    this.plan = await this.service.getOne(id)
  }

  back() {
    this.$router.go(-1)
  }

  async save() {
    await this.service.update(this.plan)
    this.$router.go(-1)
  }
}
