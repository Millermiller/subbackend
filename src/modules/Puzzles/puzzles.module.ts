import Component from 'vue-class-component'
import Vue from 'vue'
import puzzleAPI from '@/api/puzzleAPI'

@Component({})
export default class PuzzlesModule extends Vue {
  private edited: {} = {
    text: '',
    translate: '',
  }
  private puzzles: [] = []
  private isComponentModalActive: boolean = false

  mounted() {
    this.load()
  }

  load() {
    puzzleAPI.all().then(
      (response) => {
        this.puzzles = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  add() {
    puzzleAPI.create(this.edited).then(
      (response) => {
        if (response.data.success) {
          this.load()
          this.$buefy.snackbar.open('Загружено!')
          this.closeSettingsModal()
        } else {
          this.$buefy.snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  remove(row: any) {
    if (confirm('удалить?')) {
      puzzleAPI.destroy(row.id).then(
        (response) => {
          this.load()
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }

  showSettingsModal() {
    this.isComponentModalActive = true
  }

  closeSettingsModal() {
    this.isComponentModalActive = false
  }
}
