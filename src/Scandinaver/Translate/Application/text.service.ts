import { Service } from 'typedi'
import { Inject } from 'vue-typedi'
import TextRepository from '@/Scandinaver/Translate/Infrastructure/text.repository'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { TranslateForm } from '@/Scandinaver/Translate/UI/translates.module'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import SynonymRepository from '@/Scandinaver/Translate/Infrastructure/synonym.repository'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { Translate } from '../Domain/Translate'

@Service()
export default class TextService extends BaseService<Translate> {
  @Inject()
  private readonly textRepository: TextRepository

  @Inject()
  private readonly synonymRepository: SynonymRepository

  public async create(form: TranslateForm): Promise<Translate> {
    return this.textRepository.create(form);
  }

  public async all(): Promise<Translate[]> {
    const { language } = store.getters
    return this.textRepository.allByLanguage(language);
  }

  public async getText(id: number): Promise<Translate> {
    return this.textRepository.one(id)
  }

  public async removeText(translate: Translate): Promise<void> {
    return this.textRepository.delete(translate);
  }

  public async publishText(translate: Translate): Promise<Translate> {
    translate.publish()
    return this.textRepository.update(translate, translate);
  }

  public async unPublishText(translate: Translate): Promise<Translate> {
    translate.unpublish()
    return this.textRepository.update(translate, translate);
  }

  public async getSynonyms(word: Word): Promise<Synonym[]> {
    return this.synonymRepository.getByWord(word)
  }

  public async addSynonym(word: Word, value: string): Promise<Synonym> {
    const synonym = new Synonym()
    synonym.id = word.id
    synonym.value = value
    return this.synonymRepository.create(synonym)
  }

  public async deleteSynonym(synonym: Synonym): Promise<void> {
    return this.synonymRepository.delete(synonym)
  }

  public async saveImage(translate: Translate, data: FormData): Promise<any> {
    return this.textRepository.saveImage(translate, data)
  }

  public async saveExtra(translate: Translate, extra: any): Promise<any> {
    translate.extra = extra;
    await this.textRepository.update(translate, translate)
  }

  public async updateSentences(translate: Translate, sentences: any): Promise<any> {
    translate.sentences = sentences
    await this.textRepository.update(translate, translate)
  }

  public async saveDescription(translate: Translate, description: string): Promise<any> {
    translate.description = description
    await this.textRepository.update(translate, translate)
  }
}
