import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import IntroService from '@/Scandinaver/Intro/Application/IntroService'

@Component({
  components: {},
})
export default class EditIntroComponent extends Vue {
  @Inject()
  private service: IntroService

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
      'froalaEditor.initialized': function () {
        console.log('initialized')
      },
    },
  }

  async load(id: number) {
    this.form = await this.service.getOne(id)
  }

  async save() {
    await this.service.update(this.form)
    this.$router.go(-1)
  }

  back() {
    this.$router.go(-1)
  }

  mounted() {
    this.load(parseInt(this.$route.params.id, 10))
  }
}
