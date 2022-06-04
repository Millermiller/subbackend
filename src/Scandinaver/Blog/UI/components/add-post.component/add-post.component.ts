import { Component, Vue } from 'vue-property-decorator'
import Post from '@/Scandinaver/Blog/Domain/Post'
import Editor from '@tinymce/tinymce-vue'
import { Inject } from 'vue-typedi'
import BlogService from '@/Scandinaver/Blog/Application/BlogService'
import CategoryService from '@/Scandinaver/Blog/Application/CategoryService'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Component({
  components: {
    Editor,
  },
})
export default class AddPostComponent extends Vue {
  @Inject()
  private blogService: BlogService

  @Inject()
  private categoryService: CategoryService

  post: Post = new Post()
  categories: Category[] = []
  seotitle: ''
  seodescription: ''
  keywords: ''
  editorConfig = {
    events: {
      initialized() {
        console.log('initialized')
      },
    },
  }

  async save() {
    if (this.post.content === '') {
      this.$buefy.snackbar.open(this.$tc('enterText'))
    }
    if (this.post.title === '') {
      this.$buefy.snackbar.open(this.$tc('enterTitle'))
    }
    await this.blogService.create(this.post)
    this.$router.go(-1)
  }

  async mounted() {
    const data: PaginatedResponse<Category> = await this.categoryService.get(new FiltersData())
    this.categories = data.data
  }
}
