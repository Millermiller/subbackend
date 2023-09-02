import { Actions } from 'vuex-smart-module'
import State from '@/app/Puzzle/Infrastructure/store/state'
import PuzzleGetters from '@/app/Puzzle/Infrastructure/store/getters'
import PuzzleMutations from '@/app/Puzzle/Infrastructure/store/mutations'

export default class PuzzleActions extends Actions<
  State,
  PuzzleGetters,
  PuzzleMutations,
  PuzzleActions
> {}
