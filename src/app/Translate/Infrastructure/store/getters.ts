import { Getters } from 'vuex-smart-module'
import State from '@/app/Translate/Infrastructure/store/state'
import { Translate } from '@/app/Translate/Domain/Translate'

export default class TextGetters extends Getters<State> {
  get texts(): Translate[] {
    return this.state.texts
  }
}
