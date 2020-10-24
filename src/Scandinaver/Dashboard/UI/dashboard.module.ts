import Component from 'vue-class-component'
import Vue from 'vue'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import LogService from '@/Scandinaver/Dashboard/Application/log.service'
import { Inject } from 'vue-typedi'
import MessageService from '@/Scandinaver/Dashboard/Application/message.service'
import DashboardService from '@/Scandinaver/Dashboard/Application/dashboard.service'
import MessageComponent from './message.component/index.vue'
import LogComponent from './log.component/index.vue'
import WordsWidget from './words-widget.component/index.vue'
import AssetsWidget from './asset-widget.component/index.vue'
import AudioWidget from './audio-widget.component/index.vue'
import TextsWidget from './texts-widget.component/index.vue'
import UsersWidget from './users-widget.component/index.vue'

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
  @Inject()
  private logService: LogService

  @Inject()
  private messageService: MessageService

  @Inject()
  private dashboardService: DashboardService

  private words: string = ''
  private assets: string = ''
  private audiofiles: string = ''
  private texts: string = ''
  private log: Log[] = []
  private messages: {} = {}
  private loading: boolean = false
  defaultSortDirection: string = 'desc'

  see(row: any) {}

  async remove(row: any) {
    await this.logService.destroy(row)
    this.log = await this.logService.getAll()
    this.$buefy.snackbar.open('Запись удалена!')
  }

  async deleteMessage(message: Message) {
    await this.messageService.destroy(message)
    this.$buefy.snackbar.open('Запись удалена!')
  }

  async mounted() {
    this.loading = true
    await this.dashboardService.loadDashboard()
    this.log = await this.logService.getAll()
    this.loading = false
  }
}
