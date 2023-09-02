import { Getters } from 'vuex-smart-module'
import State from '@/app/Puzzle/Infrastructure/store/state'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'

export default class PuzzleGetters extends Getters<State> {
  get puzzles(): Puzzle[] {
    return this.state.puzzles
  }
}
