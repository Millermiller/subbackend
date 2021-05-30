import { Word } from '@/Scandinaver/Asset/Domain/Word'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import Example from '@/Scandinaver/Asset/Domain/Example'
import { User } from '@/Scandinaver/Core/Domain/User'

export default interface CardForm {
  id: number,
  word: Word,
  translate: Translate,
  examples: Example[],
  user: User
}
