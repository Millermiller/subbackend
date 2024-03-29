import { Inject, Service } from 'typedi'
import { BaseService } from '@/app/Core/Application/base.service'
import Page from '@/app/Pages/Domain/Page'
import PageRepository from '@/app/Pages/Infrastructure/page.repository'
import { FiltersData } from '@/app/Core/Application/FiltersData'

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

  public async get(filters: FiltersData): Promise<Page[]> {
    return this.repository.all(filters)
  }

  public async destroy(page: Page): Promise<void> {
    return this.repository.delete(page)
  }

  public async search(search: string): Promise<Page[]> {
    return this.repository.find(search)
  }

  public async update(page: Page, data: {}) {
    return this.repository.update(page, data)
  }
}
