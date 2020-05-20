
import {Component, Vue} from "vue-property-decorator";
import Page from '@/modules/Pages/models/Page'
import metaAPI from '@/api/metaAPI'

@Component({
  components: {}
})
export default class EditPageComponent extends Vue {
  page: Page

  mounted() {
    this.load(Number(this.$route.params.id))
  }

  load(id: number){
    metaAPI.load(id).then(
      response => this.page = response.data,
      response => console.log(response)
    )
  }

  save(){
    metaAPI.save(this.page.id, this.page).then(
      (response) => {
      if(response.status === 200) {
        this.$router.go(-1)
      }
      else{
        this.$snackbar.open('Ошибка!')
      }
    }, (response) => {
      console.log(response)
    })
  }

  back(){
    this.$router.go(-1)
  }
}

