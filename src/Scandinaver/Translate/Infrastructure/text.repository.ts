import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Translate/Infrastructure/api/textAPI'
import { plainToClass } from 'class-transformer'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import { TranslateForm } from '@/Scandinaver/Translate/UI/translates.module'
import { Translate } from '../Domain/Translate'
import TextAPI = API.TextAPI

@Service()
export default class TextRepository extends BaseRepository<Translate> {
  @Inject()
  private api: TextAPI

  async all(): Promise<Translate[]> {
    throw new Error('method not implemented')
  }

  async allByLanguage(language: string): Promise<Translate[]> {
    return this.api.getTexts(language).then(response => plainToClass(Translate, response.data))
  }

  async one(id: number): Promise<Translate> {
    return this.api.getText(id).then(response => plainToClass(Translate, response.data))
  }

  async create(form: TranslateForm): Promise<Translate> {
    return this.api.create(form).then(response => plainToClass(Translate, response.data))
  }

  async update(entity: Translate, data: any): Promise<Translate> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Translate, response.data))
  }

  async delete(entity: Translate): Promise<any> {
    return this.api.destroy(entity.id)
  }

  saveImage(translate: Translate, data: FormData) {
    return this.api.saveImage(translate.id, data)
  }
}
