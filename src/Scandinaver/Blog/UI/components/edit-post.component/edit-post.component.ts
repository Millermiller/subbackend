import { Component, Vue } from 'vue-property-decorator'
import Post from '@/Scandinaver/Blog/Domain/Post'
import Category from '@/Scandinaver/Blog/Domain/Category'
import BlogService from '@/Scandinaver/Blog/Application/BlogService'
import { Inject } from 'vue-typedi'
import CategoryService from '@/Scandinaver/Blog/Application/CategoryService'
import { Editor } from '@tinymce/tinymce-vue/lib/cjs/main/ts/components/Editor'

@Component({
  components: {
    'editor': Editor
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

  async load(id: number) {
    this.post = await this.blogService.getOne(id)
  }

  async save() {
    if (this.post.content === '') {
      this.$snackbar.open(this.$tc('enterText'))
      return false
    }
    if (this.post.title === '') {
      this.$snackbar.open(this.$tc('enterTitile'))
      return false
    }
    await this.blogService.update(this.post)
    this.$router.go(-1)
  }

  back() {
    this.$router.go(-1)
  }

  onEditorChange({ editor, html, text }: any) {
    this.post.content = html
  }

  async mounted() {
    await this.load(Number(this.$route.params.id))
    this.categories = await this.categoryService.getAll()
  }
}
