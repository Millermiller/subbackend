import Post from '@/Scandinaver/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Blog/Infrastructure/api/articleAPI'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import ArticleAPI = API.ArticleAPI

@Service()
export default class PostRepository extends CommonRepository<Post> {
  @Inject()
  protected api: ArticleAPI

  async find(query: string): Promise<Post[]> {
    return this.api.search(query).then(response => plainToClass(Post, response.data))
  }
}
