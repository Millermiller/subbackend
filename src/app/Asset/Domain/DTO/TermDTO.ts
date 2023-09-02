import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { Term } from '@/app/Asset/Domain/Term'

export default class TermDTO extends EntityForm<Term> {
  value: string

  fromDTO(): Term {
    return undefined;
  }
}
