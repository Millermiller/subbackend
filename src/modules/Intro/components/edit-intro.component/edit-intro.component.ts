import { Component, Vue } from 'vue-property-decorator'
import introAPI from '@/api/introAPI'

@Component({
  components: {},
})
export default class EditIntroComponent extends Vue {
  private form: any = {
    id: 0,
    page: '',
    element: '',
    position: '',
    sort: '',
    tooltipClass: '',
    active: 0,
    content: '',
  }
  private pages: any = ['login', 'main', 'learnHome', 'learn', 'testHome', 'test', 'cards', 'texts', 'text']
  private positions: any = ['top', 'right', 'bottom', 'left']
  config: any = {
    imageUploadURL: '/admin/articles/upload',
    events: {
      'froalaEditor.initialized': function() {
        console.log('initialized')
      },
    },
  }

  load(id: number) {
    introAPI.load(id).then(
      (response) => {
        this.form = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  save() {
    introAPI.save(this.form.id, this.form).then(
      (response) => {
        if (response.status === 200) this.$router.go(-1)
        else this.$buefy.snackbar.open(this.$tc('error'))
      },
      (response) => {
        console.log(response)
      },
    )
  }

  back() {
    this.$router.go(-1)
  }

  mounted() {
    this.load(parseInt(this.$route.params.id, 10))
  }
}
