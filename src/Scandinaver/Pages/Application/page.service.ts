import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Page from '@/Scandinaver/Pages/Domain/Page'
import PageRepository from '@/Scandinaver/Pages/Infrastructure/page.repository'

@Service()
export default class PageService extends BaseService<Page> {
  @Inject()
  private readonly repository: PageRepository

  public async create(page: Page): Promise<Page> {
    return this.repository.create(page)
  }

  public async getOne(id: number): Promise<Page> {
    return this.repository.one(id)
  }

  public async getAll(): Promise<Page[]> {
    return this.repository.all()
  }

  public async destroy(page: Page): Promise<void> {
    return this.repository.delete(page)
  }

  public async search(search: string): Promise<Page[]> {
    return this.repository.find(search)
  }

  public async update(page: Page) {
    return this.repository.update(page, page)
  }
}
