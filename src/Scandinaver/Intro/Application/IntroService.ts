import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { Inject, Service } from 'typedi'
import IntroRepository from '@/Scandinaver/Intro/Infrastructure/IntroRepository'

@Service()
export default class IntroService extends BaseService<Intro> {

  @Inject()
  private repository: IntroRepository

  create(input: any): Promise<Intro> | Intro {
    const intro = new Intro();
    return this.repository.save(intro)
  }

  async getOne(id: number): Promise<Intro> {
    return this.repository.one(id)
  }

  async getAll(): Promise<Intro[]> {
    return this.repository.all()
  }

  async destroy(intro: Intro) {
    return this.repository.delete(intro)
  }

  async update(intro: Intro): Promise<Intro> {
    return this.repository.save(intro)
  }
}
