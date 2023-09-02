import Word from './DictionaryItem'
import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { Translate } from '@/app/Translate/Domain/Translate'

export class TranslateForm extends EntityForm<Translate> {
  title: string;
  original: string;
  translate: string;
  language: string;
  tooltips: any[] = []
  dictionary: any[] = []
  published: boolean = false
  sentences: Word[][]
  description: string | null

  public fromDTO(): Translate {
    const translate = new Translate()
    translate.id = this.id
    translate.title = this.title
    translate.translate = this.translate
    return translate
  }
}
