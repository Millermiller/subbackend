import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { Term } from '@/Scandinaver/Asset/Domain/Term'

export default class TermDTO extends EntityForm<Term> {
  value: string

  fromDTO(): Term {
    return undefined;
  }
}
