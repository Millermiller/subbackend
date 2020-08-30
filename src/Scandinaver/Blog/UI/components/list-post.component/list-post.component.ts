import Component from 'vue-class-component'
import Post from '@/Scandinaver/Blog/Domain/Post'
import Vue from 'vue'
import BlogService from '@/Scandinaver/Blog/Application/BlogService'
import { Inject } from 'vue-typedi'

@Component({
  components: {}
})
export default class ListPostComponent extends Vue {

  @Inject()
  private service: BlogService

  articles: Post[] = []
  search: string = ''
  loading: boolean = false

  created() {
    this.load()
  }

  async load() {
    this.articles = await this.service.getAll()
  }

  async remove(row: any) {
    if (confirm('Удалить?')) {
      await this.service.destroy(row)
      this.$snackbar.open('Статья удалена!')
      await this.load()
    }
  }

  edit(row: any) {
    this.$router.push({ name: 'post', params: { id: row.id } })
  }

  async find() {
    this.articles = await this.service.search(this.search)
  }
}

