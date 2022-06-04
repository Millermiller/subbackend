import { User } from '@/Scandinaver/Core/Domain/User'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import TermDTO from '@/Scandinaver/Asset/Domain/DTO/TermDTO'
import TranslateDTO from '@/Scandinaver/Asset/Domain/DTO/TranslateDTO'
import ExampleDTO from '@/Scandinaver/Asset/Domain/DTO/ExampleDTO'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import { Term } from '@/Scandinaver/Asset/Domain/Term'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import Example from '@/Scandinaver/Asset/Domain/Example'

export default class CardDTO extends EntityForm<Card> {
  id: number
  term: TermDTO
  translate: TranslateDTO
  examples: ExampleDTO[]
  user: User

  constructor() {
    super()
    this.translate = new TranslateDTO()
    this.term = new TermDTO()
    this.examples = []
  }
  fromDTO(): Card {
    const card = new Card()

    const term = new Term(this.term.value)
    term.id = this.term.id

    const translate = new Translate(this.translate.value)
    translate.id = this.translate.id

    const examples = this.examples.map((item) => {
      const example = new Example()
      example.id = item.id
      example.text = item.text
      example.value = item.value
      return example
    })

    card.id = this.id
    card.term = term
    card.translate = translate
    card.example = examples
    return card
  }
}
