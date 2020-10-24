import { Inject, Service } from 'typedi'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Page from '@/Scandinaver/Pages/Domain/Page'
import { API } from '@/Scandinaver/Pages/Infrastructure/api/metaAPI'
import { plainToClass } from 'class-transformer'
import MetaAPI = API.MetaAPI

@Service()
export default class PageRepository extends BaseRepository<Page> {
  @Inject()
  private api: MetaAPI

  async all(): Promise<Page[]> {
    return this.api.all().then(response => plainToClass(Page, response.data))
  }

  async one(id: number): Promise<Page> {
    return this.api.load(id).then(response => plainToClass(Page, response.data))
  }

  async create(data: any): Promise<Page> {
    throw new Error('Method not implemented.')
  }

  async update(entity: Page, data: any): Promise<Page> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Page, response.data))
  }

  async delete(entity: Page): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async find(search: string): Promise<Page[]> {
    return this.api.search(search).then(response => plainToClass(Page, response.data))
  }
}
