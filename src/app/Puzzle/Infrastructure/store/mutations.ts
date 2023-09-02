import { Mutations } from 'vuex-smart-module'
import State from '@/app/Puzzle/Infrastructure/store/state'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'

export default class PuzzleMutations extends Mutations<State> {
  public setPuzzles(data: Puzzle[]): void {
    this.state.puzzles = data
  }
}
