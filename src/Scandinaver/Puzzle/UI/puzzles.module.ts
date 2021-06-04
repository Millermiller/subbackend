import Component from 'vue-class-component'
import Vue from 'vue'
import PuzzleService from '@/Scandinaver/Puzzle/Application/puzzle.service'
import { Inject } from 'vue-typedi'
import { Puzzle } from '@/Scandinaver/Puzzle/Domain/Puzzle'
import { permissions } from '@/permissions/permission.type'

@Component({})
export default class PuzzlesModule extends Vue {
  @Inject()
  private readonly service: PuzzleService

  public edited: {text: string, translate: string} = {
    text: '',
    translate: '',
  }

  public puzzles: Puzzle[] = []
  public isComponentModalActive: boolean = false
  public loading: boolean = false
  public permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.puzzles = await this.service.getPuzzles()
  }

  public async addPuzzle(): Promise<void> {
    await this.service.create({ text: this.edited.text, translate: this.edited.translate })
    await this.load()
    this.$buefy.snackbar.open(this.$tc('uploaded'))
    this.closeSettingsModal()
  }

  public async remove(puzzle: Puzzle): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(puzzle)
        await this.load()
      },
    })
  }

  public edit(puzzle: Puzzle): void {
    // TODO: implement
  }

  public showSettingsModal(): void {
    this.isComponentModalActive = true
  }

  public closeSettingsModal(): void {
    this.isComponentModalActive = false
  }
}
