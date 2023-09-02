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
  private categories: Category[] = []
  private seotitle: string = ''
  private seodescription: string = ''
  private keywords: string = ''
  private config = {}
  private active: boolean = false

  async load(id: number) {
    this.post = await this.blogService.getOne(id)
  }

  async save() {
    if (this.post.content === '') {
      this.$buefy.snackbar.open(this.$tc('enterText'))
    }
    if (this.post.title === '') {
      this.$buefy.snackbar.open(this.$tc('enterTitile'))
    }
    await this.blogService.update(this.post, this.post)
    this.$router.go(-1)
  }

  back() {
    this.$router.go(-1)
  }

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
