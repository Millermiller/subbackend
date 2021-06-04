import { Inject, Service } from 'typedi'
import { plainToClass } from 'class-transformer'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { API } from './api/text.api'
import { Translate } from '../Domain/Translate'
import TextAPI = API.TextAPI

@Service()
export default class TextRepository extends CommonRepository<Translate> {
  @Inject()
  protected readonly api: TextAPI

  public async all(): Promise<Translate[]> {
    throw new Error('method not implemented')
  }

  public async allByLanguage(language: string): Promise<Translate[]> {
    return this.api.getTexts(language).then(response => plainToClass(Translate, response.data))
  }

  public async saveImage(translate: Translate, data: FormData) {
    return this.api.saveImage(translate.getId(), data)
  }
}
