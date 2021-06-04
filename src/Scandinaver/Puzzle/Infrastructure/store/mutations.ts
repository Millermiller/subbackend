import { Mutations } from 'vuex-smart-module'
import State from '@/Scandinaver/Puzzle/Infrastructure/store/state'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'

export default class PuzzleMutations extends Mutations<State> {
  public setPuzzles(data: Puzzle[]): void {
    this.state.puzzles = data
  }
}
