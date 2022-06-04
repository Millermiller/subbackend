import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Intro from '@/Scandinaver/Intro/Domain/Intro'

export class IntroForm extends EntityForm<Intro> {
  page: string
  target: string
  content: string
  position: string
  headerText: string
  sort: number
  active: boolean

  public fromDTO(): Intro {
    const intro = new Intro()
    intro.id = this.id || undefined
    intro.page = this.page
    intro.target = this.target
    intro.content = this.content
    intro.position = this.position
    intro.headerText = this.headerText
    intro.sort = this.sort
    intro.active = this.active

    return intro
  }
}
