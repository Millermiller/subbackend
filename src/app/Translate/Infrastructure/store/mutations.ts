import { Mutations } from 'vuex-smart-module'
import State from '@/app/Translate/Infrastructure/store/state'
import { Translate } from '@/app/Translate/Domain/Translate'

export default class TextMutations extends Mutations<State> {
  public setTexts(data: Translate[]): void {
    this.state.texts = data
  }
}
