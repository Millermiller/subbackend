import { Component, Vue } from 'vue-property-decorator'
import Post from '@/app/Blog/Domain/Post'
import Editor from '@tinymce/tinymce-vue'
import { Inject } from 'vue-typedi'
import BlogService from '@/app/Blog/Application/BlogService'
import CategoryService from '@/app/Blog/Application/CategoryService'
import Category from '@/app/Blog/Domain/Category'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

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

  public post: Post = new Post()
  public categories: Category[] = []
  public errors: { [x: string]: any } = []

  editorConfig = {
    events: {
      initialized() {
        console.log('initialized')
      },
    },
  }

  async save() {
    try {
      await this.blogService.create(this.post)
      this.$router.go(-1)
    } catch (e) {
      this.errors = e.violations.reduce((accumulator: any, value: {
          propertyPath: string
          title: string
        }) => ({ ...accumulator, [value.propertyPath]: value.title }),
      {})
    }
  }

  async mounted() {
    const data: PaginatedResponse<Category> = await this.categoryService.get(new FiltersData())
    this.categories = data.data
  }

  public back = () => this.$router.go(-1)
}
