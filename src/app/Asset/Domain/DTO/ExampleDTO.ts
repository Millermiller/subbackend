import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Example from '@/app/Asset/Domain/Example'

export default class ExampleDTO extends EntityForm<Example> {
  text: string = ''
  value: string = ''

  fromDTO(): Example {
    return undefined;
  }
}
