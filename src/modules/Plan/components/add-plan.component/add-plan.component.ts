
import {Component, Vue} from "vue-property-decorator";
import planAPI from '@/api/planAPI'
import Plan from '@/modules/Plan/models/Plan'

@Component({
  components: {}
})
export default class AddPlanComponent extends Vue {
  plan: Plan

  back() {
    this.$router.go(-1)
  }

  save() {
    planAPI.create(this.plan).then(
      response => {
        if (response.status === 201) this.$router.go(-1)
        else this.$snackbar.open(this.$tc('error'))
      },
      response => {
        console.log(response)
      }
    )
  }
}

