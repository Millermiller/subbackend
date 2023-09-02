import { User } from '@/app/Core/Domain/User'
import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import TermDTO from '@/app/Asset/Domain/DTO/TermDTO'
import TranslateDTO from '@/app/Asset/Domain/DTO/TranslateDTO'
import ExampleDTO from '@/app/Asset/Domain/DTO/ExampleDTO'
import { Card } from '@/app/Asset/Domain/Card'
import { Term } from '@/app/Asset/Domain/Term'
import Translate from '@/app/Asset/Domain/Translate'
import Example from '@/app/Asset/Domain/Example'

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
