import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Translate from '@/app/Asset/Domain/Translate'

export default class TranslateDTO extends EntityForm<Translate> {
  value: string

  fromDTO(): Translate {
    return undefined;
  }
}
