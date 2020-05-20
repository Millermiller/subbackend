import Component from 'vue-class-component'
import Vue from 'vue'
import Plan from '@/modules/Plan/models/Plan'
import planAPI from '@/api/planAPI'

@Component({
  components: {},
})
export default class PlanModule extends Vue {
  plans: Plan[]
  loading: boolean

  mounted() {
    this.load()
  }

  load() {
    this.loading = true
    planAPI.all().then(
      response => {
        this.plans = response.data
        this.loading = false
      },
      response => {
        console.log(response)
      }
    )
  }

  edit(row: any) {
    this.$router.push({ name: 'Тариф', params: { id: row.id } })
  }

  add() {
    this.$router.push({ name: 'Добавить тариф' })
  }

  remove(row: any) {
    if (confirm('Удалить?')) {
      planAPI.destroy(row.id).then(
        response => {
          if (response.status === 204) {
            this.$snackbar.open('Тариф удален!')
            this.load()
          } else {
            this.$snackbar.open(this.$tc('error'))
          }
        },
        response => {
          this.$snackbar.open(this.$tc('error'))
          console.log(response)
        }
      )
    }
  }
}
