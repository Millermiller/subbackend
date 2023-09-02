
import { Component, Vue } from 'vue-property-decorator';
import Page from '@/app/Pages/Domain/Page'
import { Inject } from 'vue-typedi'
import PageService from '@/app/Pages/Application/page.service'

@Component({
  components: {},
})
export default class EditPageComponent extends Vue {
  @Inject()
  private service: PageService

  page: Page

  mounted() {
    this.load(Number(this.$route.params.id))
  }

  async load(id: number) {
    this.page = await this.service.getOne(id)
  }

  async save() {
    // await this.service.update(this.page)
    this.$router.go(-1)
  }

  back() {
    this.$router.go(-1)
  }
}
