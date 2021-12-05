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
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginationConfig } from '@/Scandinaver/Core/Infrastructure/PaginationConfig'

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
  public page: number = 1
  public total: number = 1000
  private filters: FiltersData = new FiltersData()
  public config: PaginationConfig = new PaginationConfig()

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
    await this.loadLogs()
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
    this.filters.page = this.page
    this.filters.pageSize = this.config.per_page
    this.filters.sort.push({ field: 'log.id', order: 'desc' })
    await this.loadLogs()
    this.loading = false
  }

  async onPageChange(page: number) {
    this.page = page
    this.filters.page = this.page
    await this.loadLogs()
  }

  async onFiltersChange(filters: any) {
    Object.keys(filters).forEach((prop) => {
      if (filters[prop] !== '') {
        const existingFilter = this.filters.filters.filter(i => i.field === prop)[0]
        if (existingFilter) {
          existingFilter.value = filters[prop]
        } else {
          this.filters.filters.push({ field: prop, value: filters[prop], operator: 'like' })
        }
      } else {
        this.filters.filters = this.filters.filters.filter(item => item.field !== prop)
      }
    })
    await this.loadLogs()
  }

  async sortingPriorityRemoved(field: string) {
    this.filters.sort = this.filters.sort.filter(
      priority => priority.field !== field
    )
    await this.loadLogs()
  }

  async onSort(field: string, order: string, event: any) {
    const existingPriority = this.filters.sort.filter(i => i.field === field)[0]
    if (existingPriority) {
      existingPriority.order = existingPriority.order === 'desc' ? 'asc' : 'desc'
    } else {
      this.filters.sort.push({ field, order })
    }

    await this.loadLogs()
  }

  async loadLogs(): Promise<void> {
    this.loading = true
    const response = await this.logService.filter(this.filters)
    this.log = response.data
    this.config = response.meta.pagination
    this.loading = false
  }
}
