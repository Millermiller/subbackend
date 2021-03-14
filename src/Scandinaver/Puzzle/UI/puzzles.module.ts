import Component from 'vue-class-component'
import Vue from 'vue'
import PuzzleService from '@/Scandinaver/Puzzle/Application/puzzle.service'
import { Inject } from 'vue-typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import { permissions } from '@/permissions/permission.type'

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
  private permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  mounted() {
    this.load()
  }

  async load() {
    this.puzzles = await this.service.getPuzzles()
  }

  async addPuzzle() {
    await this.service.create({ text: this.edited.text, translate: this.edited.translate })
    await this.load()
    this.$buefy.snackbar.open(this.$tc('uploaded'))
    this.closeSettingsModal()
  }

  async remove(puzzle: Puzzle) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(puzzle)
        await this.load()
      },
    })
  }

  edit(puzzle: Puzzle) {
    // TODO: implement
  }

  showSettingsModal() {
    this.isComponentModalActive = true
  }

  closeSettingsModal() {
    this.isComponentModalActive = false
  }
}
