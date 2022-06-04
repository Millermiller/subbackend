import { Inject } from 'vue-typedi'
import PageService from '@/Scandinaver/Pages/Application/page.service'
import Page from '@/Scandinaver/Pages/Domain/Page'
import Vue from 'vue'
import Component from 'vue-class-component'
import { permissions } from '@/permissions/permission.type'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'

@Component({
  components: {},
})
export default class ListPageComponent extends Vue {
  @Inject()
  private service: PageService

  private pages: Page[] = []
  private newpage: Page = new Page()
  private search: string = ''
  private loading: boolean = false
  private permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.pages = await this.service.get(new FiltersData())
    this.loading = false
  }

  add() {
    this.$router.push({ name: 'add-page' })
  }

  async remove(row: any) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(row);
        this.$buefy.snackbar.open(this.$tc('pageRemoved'))
        await this.load()
      },
    })
  }

  edit(row: any) {
    this.$router.push({ name: 'page', params: { id: row.id } })
  }

  async find() {
    this.pages = await this.service.search(this.search)
  }
}
