import { Inject } from 'vue-typedi'
import PageService from '@/Scandinaver/Pages/Application/page.service'
import Page from '@/Scandinaver/Pages/Domain/Page'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {},
})
export default class ListPageComponent extends Vue {
  @Inject()
  private service: PageService

  private pages: Page[] = []
  private newpage: Page = new Page()
  private search: string = ''
  loading: boolean = false

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.pages = await this.service.getAll()
    this.loading = false
  }

  add() {
    this.$router.push({ name: 'Добавить страницу' })
  }

  async remove(row: any) {
    await this.$buefy.dialog.confirm({
      message: 'Удалить?',
      onConfirm: async () => {
        await this.service.destroy(row);
        this.$buefy.snackbar.open('Страница удалена!')
        await this.load()
      },
    })
  }

  edit(row: any) {
    this.$router.push({ name: 'Страница', params: { id: row.id } })
  }

  async find() {
    this.pages = await this.service.search(this.search)
  }
}
