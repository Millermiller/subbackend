import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Language from '@/Scandinaver/Languages/Domain/Language'
import { Inject, Service } from 'typedi'
import LanguageRepository from '@/Scandinaver/Languages/Infrastructure/language.repository'

@Service()
export default class LanguageService extends BaseService<Language> {
  @Inject()
  private readonly languageRepository: LanguageRepository

  public async create(input: any): Promise<Language> {
    return this.languageRepository.create(input)
  }

  public async getAll(): Promise<Language[]> {
    return this.languageRepository.all()
  }

  public async destroy(language: Language) {
    return this.languageRepository.delete(language)
  }

  public async update(language: Language, form: any): Promise<Language> {
    return this.languageRepository.update(language, form)
  }
}
