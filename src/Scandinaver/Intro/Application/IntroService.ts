import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { Inject, Service } from 'typedi'
import IntroRepository from '@/Scandinaver/Intro/Infrastructure/IntroRepository'
import { IntroForm } from '@/Scandinaver/Intro/Domain/IntroForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class IntroService extends BaseService<Intro> {
  @Inject()
  private readonly repository: IntroRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<Intro>> {
    return this.repository.paginate(filters)
  }

  public async create(input: IntroForm): Promise<Intro> {
    return this.repository.create(input)
  }

  public async update(intro: Intro, data: IntroForm): Promise<Intro> {
    return this.repository.update(intro, data)
  }

  public async destroy(intro: Intro): Promise<void> {
    return this.repository.delete(intro)
  }

  public async getOne(id: number): Promise<Intro> {
    return this.repository.one(id)
  }
}
