import { Module } from 'vuex-smart-module'
import State from '@/app/Puzzle/Infrastructure/store/state'
import PuzzleGetters from '@/app/Puzzle/Infrastructure/store/getters'
import PuzzleMutations from '@/app/Puzzle/Infrastructure/store/mutations'
import PuzzleActions from '@/app/Puzzle/Infrastructure/store/actions'

export const puzzleModule = new Module({
  namespaced: false,
  state: State,
  getters: PuzzleGetters,
  mutations: PuzzleMutations,
  actions: PuzzleActions,
})
