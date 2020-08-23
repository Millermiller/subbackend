import Component from 'vue-class-component'
import Vue from 'vue'
import Page from '../Domain/Page'
import PageService from '@/Scandinaver/Pages/Application/page.service'
import { Inject } from 'vue-typedi'

@Component({
  components: {},
})
export default class PagesModule extends Vue {

  @Inject()
  private service: PageService

  private pages: Page[] = []
  private newpage: Page = new Page()
  private search: string = ''

  mounted() {
    this.load()
  }

  async load() {
    this.pages = await this.service.getAll()
  }

  add() {
    this.$router.push({ name: 'Добавить страницу' })
  }

  async remove(row: any) {
    if (confirm('Удалить?')) {
      await this.service.destroy(row);
      this.$snackbar.open('Страница удалена!')
      await this.load()
    }
  }

  edit(row: any) {
    this.$router.push({ name: 'Страница', params: { id: row.id } })
  }

  async find() {
    this.pages = await this.service.search(this.search)
  }
}
