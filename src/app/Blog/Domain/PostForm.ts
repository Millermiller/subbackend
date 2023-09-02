import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Post from '@/app/Blog/Domain/Post'

export class PostForm extends EntityForm<Post> {
  fromDTO(): Post {
    return undefined;
  }
}
