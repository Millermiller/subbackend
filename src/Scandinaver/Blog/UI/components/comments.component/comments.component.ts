import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import CommentService from '@/Scandinaver/Blog/Application/CommentService'
import Comment from '@/Scandinaver/Blog/Domain/Comment'

@Component({
  components: {},
})
export default class CommentsComponent extends Vue {
  @Inject()
  private service: CommentService

  comments: Comment[] = []
  search: string = ''
  loading: boolean = false

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.comments = await this.service.getAll()
    this.loading = false
  }

  async remove(comment: Comment) {
    await this.$buefy.dialog.confirm({
      message: 'Are you sure?',
      onConfirm: async () => {
        await this.service.destroy(comment)
        this.$buefy.snackbar.open(this.$tc('removedComments'))
        await this.load()
      },
    })
  }

  async find() {
    this.comments = await this.service.search(this.search)
  }

  edit(row: any) {
    //
  }
}
