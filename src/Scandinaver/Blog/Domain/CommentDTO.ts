import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Comment from '@/Scandinaver/Blog/Domain/Comment'

export default class CommentDTO extends EntityForm<Comment> {
  fromDTO(): Comment {
    return undefined;
  }
}
