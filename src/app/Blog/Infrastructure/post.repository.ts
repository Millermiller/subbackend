import Post from '@/app/Blog/Domain/Post'
import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { API } from './api/article.api'
import ArticleAPI = API.ArticleAPI

@Service()
export default class PostRepository extends CommonRepository<Post> {
  @Inject()
  protected api: ArticleAPI
}
