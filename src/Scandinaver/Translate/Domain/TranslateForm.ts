import Word from './DictionaryItem'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class TranslateForm extends EntityForm {
  title: string;
  original: string;
  translate: string;
  language: string;
  tooltips: any[] = []
  dictionary: any[] = []
  published: boolean = false
  sentences: Word[][]
  description: string | null
}
