import Component from 'vue-class-component'
import Vue from 'vue'
import textAPI from '@/api/textAPI'
import Modal from './components/modal.component/index.vue'

@Component({
  components: {
    Modal,
  },
})
export default class TranslatesModule extends Vue {
  private loading: boolean = false
  private form: {} = {
    title: '',
    origtext: '',
    translate: '',
  }
  private texts: [] = []
  private isComponentModalActive: boolean = false

  icon(row: any) {
    return row.published ? 'eye' : 'eye-off'
  }

  load() {
    textAPI.all().then(
      (response) => {
        this.texts = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  remove(row: any) {
    if (confirm('удалить?')) {
      textAPI.destroy(row.id).then(
        (response) => {
          this.load()
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }

  edit(row: any) {
    this.$router.push({ name: 'textedit', params: { id: row.id } })
  }

  add() {
    textAPI.create(this.form).then(
      (response) => {
        if (response.data.success) {
          this.$buefy.snackbar.open('Загружено')
          this.load()
          this.closeSettingsModal()
        } else {
          this.$buefy.snackbar.open('Ошибка')
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  setVisibility(item: any) {
    textAPI
      .publishText({
        id: item.id,
        published: item.published ? '0' : '1',
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.load()
          } else {
            this.$buefy.snackbar.open('Ошибка')
          }
        },
        (response) => {
          console.log(response)
        },
      )
  }

  showSettingsModal() {
    this.isComponentModalActive = true
  }

  closeSettingsModal() {
    this.isComponentModalActive = false
  }

  close() {

  }

  mounted() {
    this.load()
  }
}
