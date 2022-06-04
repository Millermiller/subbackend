import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { Inject, Service } from 'typedi'
import LanguageRepository from '@/Scandinaver/Languages/Infrastructure/language.repository'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class LanguageService extends BaseService<Language> {
  @Inject()
  private readonly languageRepository: LanguageRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<Language>> {
    return this.languageRepository.paginate(filters)
  }

  public async create(input: any): Promise<Language> {
    return this.languageRepository.create(input)
  }

  public async update(language: Language, form: any): Promise<Language> {
    return this.languageRepository.update(language, form)
  }

  public async destroy(language: Language) {
    return this.languageRepository.delete(language)
  }
}
