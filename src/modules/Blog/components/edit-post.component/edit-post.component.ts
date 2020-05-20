import { Component, Vue } from 'vue-property-decorator'
import articleAPI from '@/api/articleAPI'
import categoryAPI from '@/api/categoryAPI'
import Post from '@/modules/Blog/models/Post'
import Category from '@/modules/Blog/models/Category'

@Component({
  components: {},
})
export default class EditPostComponent extends Vue {
  post: Post
  id: number
  meta_id: number
  categories: Category[]
  seotitle: string
  seodescription: string
  keywords: string

  load(id: number) {
    articleAPI.load(id).then(
      (response) => {
        this.post = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  save() {
    if (this.post.content === '') {
      this.$snackbar.open(this.$tc('enterText'))
      return false
    }
    if (this.post.title === '') {
      this.$snackbar.open(this.$tc('enterTitile'))
      return false
    }
    articleAPI.save(this.post.id, this.post).then(
      (response) => {
        console.log(response)
        if (response.status === 200) this.$router.go(-1)
        else this.$snackbar.open(this.$tc('error'))
      },
      (response) => {
        console.log(response)
      },
    )
  }

  back() {
    this.$router.go(-1)
  }

  onEditorChange({ editor, html, text }: any) {
    this.post.content = html
  }

  mounted() {
    this.load(Number(this.$route.params.id))

    categoryAPI.all().then(
      (response) => {
        this.categories = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }
}
