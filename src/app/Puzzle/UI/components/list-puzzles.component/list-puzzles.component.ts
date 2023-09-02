import Component from 'vue-class-component'
import PuzzleService from '@/app/Puzzle/Application/puzzle.service'
import { Inject } from 'vue-typedi'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'
import { PuzzleForm } from '@/app/Puzzle/Domain/PuzzleForm'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListPuzzlesComponent extends CRUDComponent<Puzzle, PuzzleForm> {
  @Inject()
  protected readonly service: PuzzleService

  protected watchLanguage = true

  protected modalTitleCreate = this.$root.$tc('createPuzzle')
  protected modalTitleUpdate = this.$root.$tc('updatePuzzle')

  protected buildForm(): PuzzleForm {
    return new PuzzleForm()
  }
}
