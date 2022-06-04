import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Translate from '@/Scandinaver/Asset/Domain/Translate'

export default class TranslateDTO extends EntityForm<Translate> {
  value: string

  fromDTO(): Translate {
    return undefined;
  }
}
