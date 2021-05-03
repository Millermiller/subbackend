import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { Inject, Service } from 'typedi'
import LanguageRepository from '@/Scandinaver/Languages/Infrastructure/language.repository'

@Service()
export default class LanguageService extends BaseService<Language> {
  @Inject()
  private languageRepository: LanguageRepository

  create(input: any): Promise<Language> | Language {
    return this.languageRepository.create(input)
  }

  async getAll(): Promise<Language[]> {
    return this.languageRepository.all()
  }

  async destroy(language: Language) {
    return this.languageRepository.delete(language)
  }

  async update(language: Language, form: any): Promise<Language> {
    return this.languageRepository.update(language, form)
  }
}
