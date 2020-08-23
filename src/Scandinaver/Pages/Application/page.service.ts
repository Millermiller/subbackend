import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Page from '@/Scandinaver/Pages/Domain/Page'
import PageRepository from '@/Scandinaver/Pages/Infrastructure/page.repository'

@Service()
export default class PageService extends BaseService<Page> {
  @Inject()
  private repository: PageRepository

  async create(page: Page): Promise<Page> {
    return await this.repository.save(page)
  }

  async getOne(id: number): Promise<Page> {
    return this.repository.one(id)
  }

  async getAll(): Promise<Page[]> {
    return this.repository.all()
  }

  async destroy(page: Page) {
    return this.repository.delete(page)
  }

  async search(search: string): Promise<Page[]> {
    return this.repository.find(search)
  }

  async update(page: Page) {
    return this.repository.save(page)
  }
}
