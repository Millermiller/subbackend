import Component from 'vue-class-component'
import Post from '@/Scandinaver/Blog/Domain/Post'
import Vue from 'vue'
import BlogService from '@/Scandinaver/Blog/Application/BlogService'
import { Inject } from 'vue-typedi'
import { permissions } from '@/permissions/permission.type'

@Component({
  components: {},
})
export default class ListPostComponent extends Vue {
  @Inject()
  private service: BlogService

  private articles: Post[] = []
  private search: string = ''
  private loading: boolean = false
  private permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  created() {
    this.load()
  }

  async load() {
    this.loading = true
    this.articles = await this.service.getAll()
    this.loading = false
  }

  async remove(row: Post) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(row)
        this.$buefy.snackbar.open(this.$tc('postRemoved'))
        await this.load()
      },
    })
  }

  edit(row: any) {
    this.$router.push({ name: 'post', params: { id: row.id } })
  }

  create() {
    this.$router.push({ name: 'add-post' })
  }

  async find() {
    this.articles = await this.service.search(this.search)
  }
}
