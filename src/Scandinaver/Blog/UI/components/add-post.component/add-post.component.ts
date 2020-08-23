import { Component, Vue } from 'vue-property-decorator'
import Post from '@/Scandinaver/Blog/Domain/Post'
import Editor from '@tinymce/tinymce-vue'
import { Inject } from 'vue-typedi'
import BlogService from '@/Scandinaver/Blog/Application/BlogService'
import CategoryService from '@/Scandinaver/Blog/Application/CategoryService'
import Category from '@/Scandinaver/Blog/Domain/Category'

@Component({
  components: {
    Editor
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
      initialized: function() {
        console.log('initialized')
      }
    }
  }

  async save() {
    if (this.post.content === '') {
      this.$snackbar.open(this.$tc('enterText'))
      return false
    }
    if (this.post.title === '') {
      this.$snackbar.open(this.$tc('enterTitle'))
      return false
    }
    await this.blogService.create(this.post)
    this.$router.go(-1)
  }

  async mounted() {
    this.categories = await this.categoryService.getAll()
  }
}
