import { Component, Vue } from 'vue-property-decorator'
import articleAPI from '@/api/articleAPI'
import categoryAPI from '@/api/categoryAPI'
import Post from '@/modules/Blog/models/Post'

@Component({
  components: {},
})
export default class AddPostComponent extends Vue {
  post: Post
  categories: []
  seotitle: ''
  seodescription: ''
  keywords: ''

  save() {
    if (this.post.content === '') {
      this.$snackbar.open(this.$tc('enterText'))
      return false
    }
    if (this.post.title === '') {
      this.$snackbar.open(this.$tc('enterTitle'))
      return false
    }

    articleAPI.save(this.post.id, this.post).then(
      (response) => {
        if (response.status === 201) this.$router.go(-1)
        else this.$snackbar.open(this.$tc('error'))
      },
      (response) => {
        console.log(response)
      },
    )
  }

  mounted() {
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
