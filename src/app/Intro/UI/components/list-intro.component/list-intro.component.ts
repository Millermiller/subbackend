import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import IntroService from '@/app/Intro/Application/IntroService'
import Intro from '@/app/Intro/Domain/Intro'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { IntroForm } from '@/app/Intro/Domain/IntroForm'

@Component({
  components: {},
})
export default class ListIntroComponent extends CRUDComponent<Intro, IntroForm> {
  @Inject()
  protected readonly service: IntroService

  protected modalTitleCreate = this.$root.$tc('createIntro')
  protected modalTitleUpdate = this.$root.$tc('updateIntro')

  protected buildForm(): IntroForm {
    return new IntroForm()
  }

  async mounted(): Promise<void> {
    // dont need load here if data load in activation hook (see keep-alive)
    // await this.load()
  }

  public tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }

  public async edit(intro: Intro): Promise<void> {
    await this.$router.push({ name: 'intro', params: { id: intro.getId().toString() } })
  }

  public async add(): Promise<void> {
    await this.$router.push({ name: 'create intro' })
  }

  async activated(): Promise<void> {
    await this.load()
  }
}
