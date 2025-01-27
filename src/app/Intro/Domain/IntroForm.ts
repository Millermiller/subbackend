import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Intro from '@/app/Intro/Domain/Intro'

export class IntroForm extends EntityForm<Intro> {
  page: string
  target: string
  content: string
  position: string
  headerText: string
  sorting: number
  active: boolean

  public fromDTO(): Intro {
    const intro = new Intro()
    intro.id = this.id || undefined
    intro.page = this.page
    intro.target = this.target
    intro.content = this.content
    intro.position = this.position
    intro.headerText = this.headerText
    intro.sort = this.sorting
    intro.active = this.active

    return intro
  }
}
