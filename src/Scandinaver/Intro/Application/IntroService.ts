import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { Inject, Service } from 'typedi'
import IntroRepository from '@/Scandinaver/Intro/Infrastructure/IntroRepository'
import { IntroForm } from '@/Scandinaver/Intro/Domain/IntroForm'

@Service()
export default class IntroService extends BaseService<Intro> {
  @Inject()
  private readonly repository: IntroRepository

  public fromDTO(dto: IntroForm): Intro {
    const intro = new Intro()
    intro.id = dto.id || undefined
    intro.page = dto.page
    intro.target = dto.target
    intro.content = dto.content
    intro.position = dto.position
    intro.headerText = dto.headerText
    intro.sort = dto.sort
    intro.active = dto.active

    return intro
  }

  public async create(input: IntroForm): Promise<Intro> {
    return this.repository.create(input)
  }

  public async getOne(id: number): Promise<Intro> {
    return this.repository.one(id)
  }

  public async getAll(): Promise<Intro[]> {
    return this.repository.all()
  }

  public async destroy(intro: Intro): Promise<void> {
    return this.repository.delete(intro)
  }

  public async update(intro: Intro, data: IntroForm): Promise<Intro> {
    return this.repository.update(intro, data)
  }
}
