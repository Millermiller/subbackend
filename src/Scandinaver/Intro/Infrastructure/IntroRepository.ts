import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Intro/Infrastructure/api/introAPI'
import { plainToClass } from 'class-transformer'
import IntroAPI = API.IntroAPI

@Service()
export default class IntroRepository extends BaseRepository<Intro> {
  @Inject()
  private api: IntroAPI

  async all(): Promise<Intro[]> {
    return this.api.all().then(response => plainToClass(Intro, response.data))
  }

  async one(id: number): Promise<Intro> {
    return this.api.load(id).then(response => plainToClass(Intro, response.data))
  }

  async create(data: any): Promise<Intro> {
    return this.api.create(data).then(response => plainToClass(Intro, response.data))
  }

  async update(entity: Intro, data: any): Promise<Intro> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Intro, response.data))
  }

  async delete(intro: Intro): Promise<any> {
    return this.api.destroy(intro.id)
  }
}
