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
  private textRepository: TextRepository

  @Inject()
  private synonymRepository: SynonymRepository

  public async create(form: TranslateForm): Promise<Translate> {
    return this.textRepository.create(form);
  }

  async getTranslate(id: number): Promise<Translate> {
    return this.textRepository.one(id)
  }

  public async all(): Promise<Translate[]> {
    const { language } = store.getters
    return this.textRepository.allByLanguage(language);
  }

  public async getText(id: number) {
    return this.textRepository.one(id)
  }

  public removeText(translate: Translate) {
    return this.textRepository.delete(translate);
  }

  public publishText(translate: Translate) {
    translate.publish()
    return this.textRepository.update(translate, translate);
  }

  public unPublishText(translate: Translate) {
    translate.unpublish()
    return this.textRepository.update(translate, translate);
  }

  async getSynonyms(word: Word): Promise<Synonym[]> {
    return this.synonymRepository.getByWord(word)
  }

  addSynonym(word: Word, value: string): Promise<Synonym> {
    const synonym = new Synonym()
    synonym.id = word.id
    synonym.value = value
    return this.synonymRepository.create(synonym)
  }

  async deleteSynonym(synonym: Synonym) {
    return this.synonymRepository.delete(synonym)
  }

  saveImage(translate: Translate, data: FormData) {
    return this.textRepository.saveImage(translate, data)
  }

  async saveExtra(translate: Translate, extra: any) {
    translate.extra = extra;
    await this.textRepository.update(translate, translate)
  }

  async updateSentences(translate: Translate, sentences: any) {
    translate.sentences = sentences
    await this.textRepository.update(translate, translate)
  }

  async saveDescription(translate: Translate, description: string) {
    translate.description = description
    await this.textRepository.update(translate, translate)
  }
}
