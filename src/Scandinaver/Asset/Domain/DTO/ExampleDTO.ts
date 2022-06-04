import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import Example from '@/Scandinaver/Asset/Domain/Example'

export default class ExampleDTO extends EntityForm<Example> {
  text: string = ''
  value: string = ''

  fromDTO(): Example {
    return undefined;
  }
}
