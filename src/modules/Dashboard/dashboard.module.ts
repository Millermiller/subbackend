import Component from 'vue-class-component'
import Vue from 'vue'
import MessageComponent from './components/message.component/index.vue'
import LogComponent from './components/log.component/index.vue'
import WordsWidget from './components/words-widget.component/index.vue'
import AssetsWidget from './components/asset-widget.component/index.vue'
import AudioWidget from './components/audio-widget.component/index.vue'
import TextsWidget from './components/texts-widget.component/index.vue'
import UsersWidget from './components/users-widget.component/index.vue'
import messageAPI from '@/api/messageAPI'
import logAPI from '@/api/logAPI'
import Log from '@/modules/Dashboard/models/Log'
import Message from '@/modules/Dashboard/models/Message'
import commonAPI from '@/api/commonAPI'
import { store } from '@/store'

@Component({
  components: {
    MessageComponent,
    LogComponent,
    WordsWidget,
    AssetsWidget,
    AudioWidget,
    TextsWidget,
    UsersWidget,
  },
})
export default class DashboardModule extends Vue {
  private words: string = ''
  private assets: string = ''
  private audiofiles: string = ''
  private texts: string = ''
  private log: Log[] = []
  private messages: {} = {}
  private loading: boolean = false
  defaultSortDirection: string = 'desc'

  see(row: any) {}

  loadlog() {
    logAPI.all().then(
      (response) => {
        this.log = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  remove(row: any) {
    logAPI.destroy(row.id).then(
      (response) => {
        if (response.status === 204) {
          this.$snackbar.open('Запись удалена!')
          this.loadlog()
        } else {
          this.$snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        this.$snackbar.open(this.$tc('error'))
        console.log(response)
      },
    )
  }

  deleteLog(log: Log) {
    logAPI.destroy(log.id).then(
      (response) => {
        if (response.data.success) {
          this.log = response.data.log
          this.$buefy.snackbar.open('Удалено!')
        } else {
          this.$buefy.snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  deleteMessage(message: Message) {
    messageAPI.destroy(message.id).then(
      (response) => {
        if (response.status === 204) {
          this.$buefy.snackbar.open('Удалено!')
        } else {
          this.$buefy.snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  mounted() {
    this.loading = true
    commonAPI.loadDashboard().then(
      (response) => {
        store.dispatch('setDashboard', response.data)
        this.loading = false
      },
      (response) => {
        console.log(response)
      },
    )
  }
}
