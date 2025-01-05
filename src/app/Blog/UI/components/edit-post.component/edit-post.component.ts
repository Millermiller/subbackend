import { Component, Vue } from 'vue-property-decorator'
import Post from '@/app/Blog/Domain/Post'
import Category from '@/app/Blog/Domain/Category'
import BlogService from '@/app/Blog/Application/BlogService'
import { Inject } from 'vue-typedi'
import CategoryService from '@/app/Blog/Application/CategoryService'
import { Editor } from '@tinymce/tinymce-vue/lib/cjs/main/ts/components/Editor'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Component({
  components: {
    editor: Editor,
  },
})
export default class EditPostComponent extends Vue {
  @Inject()
  private blogService: BlogService

  @Inject()
  private categoryService: CategoryService

  private post: Post = new Post()
  private errors: { [x: string]: any } = []
  private active: boolean = false
  private categories: Category[] = []

  async load(id: number) {
    this.post = await this.blogService.getOne(id)
  }

  async save() {
    try {
      await this.blogService.update(this.post, this.post)
      this.$router.go(-1)
    } catch (e) {
      this.errors = e.violations.reduce((accumulator: any, value: {
          propertyPath: string
          title: string }) => ({ ...accumulator, [value.propertyPath]: value.title }),
      {})
    }
  }

  public back = () => this.$router.go(-1)

  onEditorChange({ editor, html, text }: any) {
    this.post.content = html
  }

  async activated() {
    await this.load(Number(this.$route.params.id))
    const data: PaginatedResponse<Category> = await this.categoryService.get(new FiltersData())
    this.categories = data.data
    this.active = true;
  }

  deactivated() {
    this.active = false;
  }
}
