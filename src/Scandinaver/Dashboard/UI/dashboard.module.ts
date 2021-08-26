import Component from 'vue-class-component'
import Vue from 'vue'
import Log from '@/Scandinaver/Dashboard/Domain/Log'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import LogService from '@/Scandinaver/Dashboard/Application/log.service'
import { Inject } from 'vue-typedi'
import MessageService from '@/Scandinaver/Dashboard/Application/message.service'
import DashboardService from '@/Scandinaver/Dashboard/Application/dashboard.service'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import MessageComponent from './message.component/index.vue'
import WordsWidget from './words-widget.component/index.vue'
import AssetsWidget from './asset-widget.component/index.vue'
import AudioWidget from './audio-widget.component/index.vue'
import TextsWidget from './texts-widget.component/index.vue'
import UsersWidget from './users-widget.component/index.vue'

@Component({
  components: {
    MessageComponent,
    WordsWidget,
    AssetsWidget,
    AudioWidget,
    TextsWidget,
    UsersWidget,
  },
})
export default class DashboardModule extends Vue {
  @Inject()
  private readonly logService: LogService

  @Inject()
  private readonly messageService: MessageService

  @Inject()
  private readonly dashboardService: DashboardService

  public log: Log[] = []
  public messages: {} = {}
  public loading: boolean = false
  public defaultSortDirection: string = 'desc'
  public access: boolean = false

  created(): void {
    this.access = this.$ability.can(this.$route.meta.permission)
  }

  @Watch('$route')
  private onRouteChange(route: Route): void {
    this.access = this.$ability.can(route.meta.permission)
  }

  public async remove(row: any): Promise<void> {
    this.loading = true
    await this.logService.destroy(row)
    this.log = await this.logService.getAll()
    this.$buefy.snackbar.open(this.$tc('messageRemoved'))
    this.loading = false
  }

  public async deleteMessage(message: Message): Promise<void> {
    await this.messageService.destroy(message)
    this.$buefy.snackbar.open(this.$tc('messageRemoved'))
  }

  async mounted(): Promise<void> {
    this.loading = true
    await this.dashboardService.loadDashboard()
    this.log = await this.logService.getAll()
    this.loading = false
  }
}
