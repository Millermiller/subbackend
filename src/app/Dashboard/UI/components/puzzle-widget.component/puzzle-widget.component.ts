import { Component } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import PuzzleService from '@/app/Puzzle/Application/puzzle.service'
import BaseWidgetComponent from '@/app/Core/UI/BaseWidgetComponent'
import { Puzzle } from '@/app/Puzzle/Domain/Puzzle'

@Component({
  components: {},
})
export default class PuzzleWidgetComponent extends BaseWidgetComponent<Puzzle> {
  @Inject()
  protected service: PuzzleService
  protected title: string = this.$root.$tc('puzzles')
  protected watchLanguage: boolean = true;
}
