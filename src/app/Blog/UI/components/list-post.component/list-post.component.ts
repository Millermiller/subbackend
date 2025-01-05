import Component from 'vue-class-component'
import Post from '@/app/Blog/Domain/Post'
import BlogService from '@/app/Blog/Application/BlogService'
import { Inject } from 'vue-typedi'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import { PostDTO } from '@/app/Blog/Domain/PostDTO'

@Component({
  components: {},
})
export default class ListPostComponent extends CRUDComponent<Post, PostDTO> {
  @Inject()
  protected service: BlogService

  private search: string = ''

  protected buildForm(): PostDTO {
    return new PostDTO()
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
