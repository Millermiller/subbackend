import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import IntroService from '@/Scandinaver/Intro/Application/IntroService'
import Intro from '@/Scandinaver/Intro/Domain/Intro'

@Component({})
export default class IntroModule extends Vue {
  @Inject()
  private service: IntroService

  private intros: Intro[] = []
  private loading: boolean = false

  async load() {
    this.intros = await this.service.getAll()
  }

  edit(row: any) {
    this.$router.push({ name: 'Intro', params: { id: row.id } })
  }

  async remove(row: any) {
    await this.$buefy.dialog.confirm({
      message: 'Удалить?',
      onConfirm: async () => {
        await this.service.destroy(row)
      },
    })
  }

  mounted() {
    this.load()
  }

  add() {

  }
}
