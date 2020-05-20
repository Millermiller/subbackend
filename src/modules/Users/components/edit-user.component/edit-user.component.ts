
import {Component, Vue} from "vue-property-decorator";
import userAPI from '@/api/userAPI'
import User from '@/modules/Users/models/User'

@Component({
  components: {}
})
export default class EditUserComponent extends Vue {
  user: User
  date: Date

  mounted() {
    this.load(Number(this.$route.params.id))
  }

  load(id: number) {
    userAPI.load(id).then(
      response => {
        this.user = response.data
        this.date = new Date(this.user.active_to)
      },
      response => {
        console.log(response)
      }
    )
  }

  back() {
    this.$router.go(-1)
  }

  save() {
    this.user.active_to = this.date.toDateString()
    userAPI.save(this.user.id, this.user).then(
      response => {
        console.log(response)
        if (response.status === 200) this.$router.go(-1)
        else this.$snackbar.open(this.$tc('error'))
      },
      response => {
        console.log(response)
      }
    )
  }
}

