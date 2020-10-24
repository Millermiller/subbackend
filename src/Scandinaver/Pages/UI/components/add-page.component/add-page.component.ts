import { Component, Vue } from 'vue-property-decorator'
import Page from '@/Scandinaver/Pages/Domain/Page'
import { Inject } from 'vue-typedi'
import PageService from '@/Scandinaver/Pages/Application/page.service'

@Component({
  components: {},
})
export default class AddPageComponent extends Vue {
  @Inject()
  private service: PageService

  page: Page

  async save() {
    await this.service.create(this.page)
    this.$router.go(-1)
  }

  back() {
    this.$router.go(-1)
  }
}
