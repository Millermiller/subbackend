import { Getters } from 'vuex-smart-module'
import State from '@/Scandinaver/Puzzle/Infrastructure/store/state'

export default class PuzzleGetters extends Getters<State> {
  get puzzles() {
    return this.state.puzzles
  }
}
