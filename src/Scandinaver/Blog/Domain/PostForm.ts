import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Post from '@/Scandinaver/Blog/Domain/Post'

export class PostForm extends EntityForm<Post> {
  fromDTO(): Post {
    return undefined;
  }
}
