import Component from 'vue-class-component'
import Vue from 'vue'
import articleAPI from '@/api/articleAPI'
import Post from '@/modules/Blog/models/Post'

@Component({
  components: {},
})
export default class BlogModule extends Vue {
  articles: Post[] = []
  search: string = ''
  loading: boolean = false

  mounted() {
    //  this.load()
  }

  load() {
    articleAPI.all().then(
      (response) => {
        this.articles = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  edit(row: any) {
    this.$router.push({ name: 'Статья', params: { id: row.id } })
  }

  remove(row: any) {
    if (confirm('Удалить?')) {
      articleAPI.destroy(row.id).then(
        (response) => {
          if (response.status === 204) {
            this.$snackbar.open('Статья удалена!')
            this.load()
          } else {
            this.$snackbar.open(this.$tc('error'))
          }
        },
        (response) => {
          this.$snackbar.open(this.$tc('error'))
          console.log(response)
        },
      )
    }
  }

  find() {
    articleAPI.search(this.search).then(
      (response) => {
        this.articles = response.data
      },
      (response) => {
        this.$snackbar.open(this.$tc('error'))
        console.log(response)
      },
    )
  }
}
