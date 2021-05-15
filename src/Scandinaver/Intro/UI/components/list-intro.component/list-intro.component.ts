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
  private introService: IntroService

  private loading: boolean = false
  private permissions: {}
  private intros: Intro[] = []

  constructor() {
    super()
    this.permissions = permissions
  }

  mounted() {
    // dont need load here if data load in activation hook (see keep-alive)
    this.load()
  }

  async load() {
    this.loading = true
    this.intros = await this.introService.getAll()
    this.loading = false
  }

  tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }

  async edit(intro: Intro) {
    await this.$router.push({ name: 'intro', params: { id: intro.getId().toString() } })
  }

  async add(intro: Intro) {
    await this.$router.push({ name: 'create intro' })
  }

  async activated() {
    await this.load()
  }
}
