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
    this.$router.push({ name: 'Тариф', params: { id: row.id } })
  }

  add() {
    this.$router.push({ name: 'Добавить тариф' })
  }

  async remove(row: Plan) {
    await this.$buefy.dialog.confirm({
      message: 'Удалить?',
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open('Тариф удален!')
        await this.load()
      },
    })
  }
}
