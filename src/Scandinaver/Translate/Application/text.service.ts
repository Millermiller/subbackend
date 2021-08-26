import { Service } from 'typedi'
import { Inject } from 'vue-typedi'
import TextRepository from '@/Scandinaver/Translate/Infrastructure/text.repository'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { Translate } from '../Domain/Translate'
import { TranslateForm } from '@/Scandinaver/Translate/Domain/TranslateForm'

@Service()
export default class TextService extends BaseService<Translate> {
  @Inject()
  private readonly textRepository: TextRepository

  public async create(data: TranslateForm): Promise<Translate> {
    data.language = store.getters.language
    return this.textRepository.create(data);
  }

  public async getAll(): Promise<Translate[]> {
    const { language } = store.getters
    return this.textRepository.allByLanguage(language);
  }

  public async getText(id: number): Promise<Translate> {
    return this.textRepository.one(id)
  }

  public async destroy(translate: Translate): Promise<void> {
    return this.textRepository.delete(translate);
  }

  public async publishText(translate: Translate): Promise<Translate> {
    translate.publish()
    return this.textRepository.update(translate, translate.toDTO());
  }

  public async unPublishText(translate: Translate): Promise<Translate> {
    translate.unpublish()
    return this.textRepository.update(translate, translate.toDTO());
  }

  public async saveImage(translate: Translate, data: FormData): Promise<any> {
    return this.textRepository.saveImage(translate, data)
  }

  public async saveTooltips(translate: Translate, tooltips: any): Promise<any> {
    translate.tooltips = tooltips;
    await this.textRepository.update(translate, translate.toDTO())
  }

  public async updateSentences(translate: Translate, sentences: any): Promise<any> {
    translate.sentences = sentences
    await this.textRepository.update(translate, translate.toDTO())
  }

  public async saveDescription(translate: Translate, description: string): Promise<any> {
    translate.description = description
    await this.textRepository.update(translate, translate.toDTO())
  }

  public fromDTO(dto: TranslateForm): Translate {
    const translate = new Translate()
    translate.id = dto.id
    translate.title = dto.title
    translate.translate = dto.translate
    return translate
  }

  public async update(translate: Translate): Promise<any> {
    await this.textRepository.update(translate, translate.toDTO())
  }
}
