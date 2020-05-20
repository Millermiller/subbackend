import { Component, Vue } from 'vue-property-decorator'
import planAPI from '@/api/planAPI'
import Plan from '@/modules/Plan/models/Plan'

@Component({
  components: {},
})
export default class EditPlanComponent extends Vue {
  plan: Plan

  mounted() {
    this.load(Number(this.$route.params.id))
  }

  load(id: number) {
    planAPI.load(id).then(
      (response) => {
        this.plan = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  back() {
    this.$router.go(-1)
  }

  save() {
    planAPI.save(this.plan.id, this.plan).then(
      (response) => {
        if (response.status === 200) this.$router.go(-1)
        else this.$snackbar.open(this.$tc('error'))
      },
      (response) => {
        console.log(response)
      },
    )
  }
}
