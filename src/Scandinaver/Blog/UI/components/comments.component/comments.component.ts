import { Component, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import CommentService from '@/Scandinaver/Blog/Application/CommentService'
import Comment from '@/Scandinaver/Blog/Domain/Comment'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import CommentDTO from '@/Scandinaver/Blog/Domain/CommentDTO'

@Component({
  components: {},
})
export default class CommentsComponent extends CRUDComponent<Comment, CommentDTO> {
  @Inject()
  protected service: CommentService

  protected modalTitleCreate = this.$root.$tc('createComment')
  protected modalTitleUpdate = this.$root.$tc('updateComment')

  protected buildForm(): CommentDTO {
    return new CommentDTO()
  }
}
