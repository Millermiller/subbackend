import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import IntroService from '@/Scandinaver/Intro/Application/IntroService'
import Editor from '@tinymce/tinymce-vue'
import { isNumeric } from 'rxjs/internal-compatibility'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { IntroForm } from '@/Scandinaver/Intro/Domain/IntroForm'

@Component({
  components: {
    Editor
  },
})
export default class EditIntroComponent extends Vue {
  @Inject()
  private readonly service: IntroService

  public form: IntroForm = {
    id: undefined,
    page: '',
    target: '',
    position: '',
    sort: 0,
    headerText: '',
    active: false,
    content: '',
  }
  public readonly pages: any = [
    'MainPage',
    'AssetsPage',
    'TestsPage',
    'PersonalPage',
    'TextPage',
    'TextItem',
    'PuzzlePage'
  ]
  public positions: any = ['top', 'right', 'bottom', 'left']
  public active: boolean = false
  public loading: boolean = false

  private async load(id: number): Promise<void> {
    this.loading = true
    this.form = await this.service.getOne(id)
    this.loading = false
  }

  public async save(): Promise<void> {
    this.loading = true
    if (this.form.id !== undefined) {
      const intro = Intro.fromDTO(this.form)
      await this.service.update(intro, intro.toDTO())
    } else {
      await this.service.create(this.form)
    }
    await this.$router.go(-1)
  }

  public back(): void {
    this.$router.go(-1)
  }

  async mounted(): Promise<void> {
    const { id } = this.$route.params
    if (isNumeric(id)) {
      await this.load(parseInt(this.$route.params.id, 10))
    }
    this.active = false;
    this.active = true;
  }

  activated(): void {
    this.active = true;
  }

  deactivated(): void {
    this.active = false;
  }
}
