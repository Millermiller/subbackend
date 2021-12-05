import Component from 'vue-class-component'
import Post from '@/Scandinaver/Blog/Domain/Post'
import BlogService from '@/Scandinaver/Blog/Application/BlogService'
import { Inject } from 'vue-typedi'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { PostForm } from '@/Scandinaver/Blog/Domain/PostForm'

@Component({
  components: {},
})
export default class ListPostComponent extends CRUDComponent<Post, PostForm> {
  @Inject()
  protected service: BlogService

  private search: string = ''

  protected buildForm(): PostForm {
    return new PostForm()
  }

  // eslint-disable-next-line no-empty-function
  async mounted(): Promise<void> {

  }

  async created() {
    // await this.load()
  }

  edit(row: any) {
    this.$router.push({ name: 'post', params: { id: row.id } })
  }

  create() {
    this.$router.push({ name: 'add-post' })
  }

  async find() {
    this.entities = await this.service.search(this.search)
  }

  async activated() {
    await this.load()
  }
}
