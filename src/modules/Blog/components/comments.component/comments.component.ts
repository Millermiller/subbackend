import { Component, Vue } from 'vue-property-decorator'
import commentsAPI from '@/api/commentsAPI'

@Component({
  components: {},
})
export default class CommentsComponent extends Vue {
  comments: Comment[]
  search: string

  mounted() {
    this.load()
  }

  load() {
    commentsAPI.all().then(
      (response) => {
        this.comments = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  remove(id: number) {
    if (confirm('Удалить?')) {
      commentsAPI.destroy(id).then(
        (response) => {
          if (response.status === 204) {
            this.$snackbar.open(this.$tc('removedComments'))
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
    commentsAPI.search(this.search).then(
      (response) => {
        this.comments = response.data
      },
      (response) => {
        this.$snackbar.open(this.$tc('error'))
        console.log(response)
      },
    )
  }
}
