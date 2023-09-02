import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Comment from '@/app/Blog/Domain/Comment'

export default class CommentDTO extends EntityForm<Comment> {
  fromDTO(): Comment {
    return undefined;
  }
}
