import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { Inject, Service } from 'typedi'
import LanguageRepository from '@/Scandinaver/Languages/Infrastructure/language.repository'
import { LanguageForm } from '@/Scandinaver/Languages/Domain/LanguageForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'

@Service()
export default class LanguageService extends BaseService<Language> {
  @Inject()
  private readonly languageRepository: LanguageRepository

  public fromDTO(dto: LanguageForm): Language {
    const language = new Language()
    language.id = dto.id
    language.title = dto.title
    language.letter = dto.letter
    language.flag = dto.flag
    return language
  }

  public async create(input: any): Promise<Language> {
    return this.languageRepository.create(input)
  }

  public async getAll(filters: FiltersData): Promise<Language[]> {
    return this.languageRepository.all(filters)
  }

  public async destroy(language: Language) {
    return this.languageRepository.delete(language)
  }

  public async update(language: Language, form: any): Promise<Language> {
    return this.languageRepository.update(language, form)
  }
}
