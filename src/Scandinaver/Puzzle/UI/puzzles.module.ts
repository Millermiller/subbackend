import Component from 'vue-class-component'
import Vue from 'vue'
import PuzzleService from '@/Scandinaver/Puzzle/Application/puzzle.service'
import { Inject } from 'vue-typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'

@Component({})
export default class PuzzlesModule extends Vue {

  @Inject()
  private service: PuzzleService

  private edited: {text: string, translate: string} = {
    text: '',
    translate: '',
  }

  private puzzles: Puzzle[] = []
  private isComponentModalActive: boolean = false
  private loading: boolean = false

  mounted() {
    this.load()
  }

  async load() {
    this.puzzles = await this.service.getPuzzles()
  }

  async add() {
    await this.service.create({ text: this.edited.text, translate: this.edited.translate })
    await this.load()
    this.$buefy.snackbar.open('Загружено!')
    this.closeSettingsModal()
  }

  async remove(row: Puzzle) {
    if (confirm('удалить?')) {
      await this.service.destroy(row)
      await this.load()
    }
  }

  showSettingsModal() {
    this.isComponentModalActive = true
  }

  closeSettingsModal() {
    this.isComponentModalActive = false
  }
}
