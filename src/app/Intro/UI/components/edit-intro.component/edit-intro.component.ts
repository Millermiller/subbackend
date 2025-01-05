import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import IntroService from '@/app/Intro/Application/IntroService'
import Editor from '@tinymce/tinymce-vue'
import { isNumeric } from 'rxjs/internal-compatibility'
import { IntroForm } from '@/app/Intro/Domain/IntroForm'
import Intro from '@/app/Intro/Domain/Intro'

@Component({
  components: {
    Editor,
  },
})
export default class EditIntroComponent extends Vue {
  @Inject()
  private readonly service: IntroService

  public form: Intro = new Intro()
  public readonly pages: any = [
    'MAIN_PAGE',
    'DEFAULT_ASSET_PAGE',
    'LEARN_ASSET_PAGE',
    'DEFAULT_TEST_PAGE',
    'TEST_PAGE',
    'PERSONAL_PAGE',
    'TRANSLATES_LIST_PAGE',
    'TRANSLATE_PAGE',
    'PUZZLE_PAGE',
  ]
  public positions: any = ['top', 'right', 'bottom', 'left']
  public active: boolean = false
  public loading: boolean = false
  public errors: { [x: string]: any } = []

  private async load(id: number): Promise<void> {
    this.loading = true
    this.form = await this.service.getOne(id)
    this.loading = false
  }

  public async save(): Promise<void> {
    this.loading = true
    if (this.form.id !== undefined) {
      try {
        await this.service.update(this.form, this.form.toDTO())
        this.$router.go(-1)
      } catch (e) {
        this.errors = e.violations.reduce((accumulator: any, value: {
            propertyPath: string
            title: string
          }) => ({ ...accumulator, [value.propertyPath]: value.title }),
        {})
        this.loading = false
      }
    } else {
      try {
        await this.service.create(this.form.toDTO())
        this.$router.go(-1)
      } catch (e) {
        this.errors = e.violations.reduce((accumulator: any, value: {
            propertyPath: string
            title: string
          }) => ({ ...accumulator, [value.propertyPath]: value.title }),
        {})
        this.loading = false
      }
    }
  }

  public back(): void {
    this.$router.go(-1)
  }

  async mounted(): Promise<void> {
    const { id } = this.$route.params
    if (isNumeric(id)) {
      await this.load(parseInt(this.$route.params.id, 10))
    }
    this.active = false
    this.active = true
  }

  activated(): void {
    this.active = true
  }

  deactivated(): void {
    this.active = false
  }
}
