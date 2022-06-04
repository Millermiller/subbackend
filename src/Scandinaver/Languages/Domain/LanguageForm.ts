import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Language from '@/Scandinaver/Languages/Domain/Language'

export class LanguageForm extends EntityForm<Language> {
  title: string
  description: string
  letter: string
  flag: any
  image: any
  active: boolean

  public fromDTO(): Language {
    const language = new Language()
    language.id = this.id
    language.title = this.title
    language.letter = this.letter
    language.flag = this.flag
    return language
  }
}
