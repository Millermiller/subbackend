import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Languages/Infrastructure/api/language.api'
import LanguageAPI = API.LanguageAPI
import { plainToClass } from 'class-transformer'

@Service()
export default class LanguageRepository extends CommonRepository<Language> {
  @Inject()
  protected readonly api: LanguageAPI

  public async update(language: Language, form: any): Promise<Language> {
    return this.api.update(language.getId(), form).then(response => plainToClass(this.api.class, response.data))
  }
}
