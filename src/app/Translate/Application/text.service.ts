import { Service } from 'typedi'
import { Inject } from 'vue-typedi'
import TextRepository from '@/app/Translate/Infrastructure/text.repository'
import { BaseService } from '@/app/Core/Application/base.service'
import { store } from '@/app/Core/Infrastructure/store'
import { Translate } from '../Domain/Translate'
import { TranslateForm } from '@/app/Translate/Domain/TranslateForm'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'

@Service()
export default class TextService extends BaseService<Translate> {
  @Inject()
  private readonly textRepository: TextRepository

  public async get(filters: FiltersData): Promise<PaginatedResponse<Translate>> {
    return this.textRepository.paginate(filters);
  }

  public async create(data: TranslateForm): Promise<Translate> {
    data.language = store.getters.language
    return this.textRepository.create(data);
  }

  public async update(translate: Translate): Promise<any> {
    await this.textRepository.update(translate, translate.toDTO())
  }

  public async destroy(translate: Translate): Promise<void> {
    return this.textRepository.delete(translate);
  }

  public async getText(id: number): Promise<Translate> {
    return this.textRepository.one(id)
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
}
