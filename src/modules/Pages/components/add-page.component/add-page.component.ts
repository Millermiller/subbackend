import { Component, Vue } from 'vue-property-decorator'
import Page from '@/modules/Pages/models/Page'
import metaAPI from '@/api/metaAPI'

@Component({
  components: {},
})
export default class AddPageComponent extends Vue {
  page: Page

  save() {
    metaAPI.save(this.page.id, this.page).then(
      (response) => {
        if (response.status === 201) this.$router.go(-1)
        else this.$snackbar.open('Ошибка!')
      },
      (response) => {
        console.log(response)
      },
    )
  }

  back() {
    this.$router.go(-1)
  }
}
