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
  private readonly service: PlanService

  public plans: Plan[]
  public loading: boolean

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.plans = await this.service.getAll()
    this.loading = false
  }

  public edit(row: any): void {
    this.$router.push({ name: 'edit-plan', params: { id: row.id } })
  }

  public add(): void {
    this.$router.push({ name: 'add-plan' })
  }

  public async remove(row: Plan): Promise<void> {
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
