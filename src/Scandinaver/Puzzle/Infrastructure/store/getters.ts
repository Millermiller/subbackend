import { Getters } from 'vuex-smart-module'
import State from '@/Scandinaver/Puzzle/Infrastructure/store/state'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'

export default class PuzzleGetters extends Getters<State> {
  get puzzles(): Puzzle[] {
    return this.state.puzzles
  }
}
