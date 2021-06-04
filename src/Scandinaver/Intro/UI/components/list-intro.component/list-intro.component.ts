import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import IntroService from '@/Scandinaver/Intro/Application/IntroService'
import { permissions } from '@/permissions/permission.type'
import Intro from '@/Scandinaver/Intro/Domain/Intro'

@Component({
  components: {},
})
export default class ListIntroComponent extends Vue {
  @Inject()
  private readonly introService: IntroService

  public loading: boolean = false
  public permissions: {}
  public intros: Intro[] = []

  constructor() {
    super()
    this.permissions = permissions
  }

  async mounted(): Promise<void> {
    // dont need load here if data load in activation hook (see keep-alive)
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.intros = await this.introService.getAll()
    this.loading = false
  }

  public tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }

  public async edit(intro: Intro): Promise<void> {
    await this.$router.push({ name: 'intro', params: { id: intro.getId().toString() } })
  }

  public async add(intro: Intro): Promise<void> {
    await this.$router.push({ name: 'create intro' })
  }

  async activated(): Promise<void> {
    await this.load()
  }
}
