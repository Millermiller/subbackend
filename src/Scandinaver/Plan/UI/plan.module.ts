import Component from 'vue-class-component'
import Vue from 'vue'
import Plan from '@/Scandinaver/Plan/Domain/Plan'
import PlanService from '@/Scandinaver/Plan/Application/plan.service'
import { Inject } from 'vue-typedi'

@Component({
  components: {},
})
export default class PlanModule extends Vue {
  @Inject()
  private service: PlanService

  plans: Plan[]
  loading: boolean

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.plans = await this.service.getAll()
    this.loading = false
  }

  edit(row: any) {
    this.$router.push({ name: 'edit-plan', params: { id: row.id } })
  }

  add() {
    this.$router.push({ name: 'add-plan' })
  }

  async remove(row: Plan) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open(this.$tc('tariffRemoved'))
        await this.load()
      },
    })
  }
}
