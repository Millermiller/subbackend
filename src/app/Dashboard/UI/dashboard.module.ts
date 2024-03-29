import Component from 'vue-class-component'
import Vue from 'vue'
import Log from '@/app/Dashboard/Domain/Log'
import Message from '@/app/Dashboard/Domain/Message'
import LogService from '@/app/Dashboard/Application/log.service'
import { Inject } from 'vue-typedi'
import MessageService from '@/app/Dashboard/Application/message.service'
import DashboardService from '@/app/Dashboard/Application/dashboard.service'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import MessageComponent from './components/message.component/index.vue'
import CardsWidget from './components/cards-widget.component/index.vue'
import AssetsWidget from './components/asset-widget.component/index.vue'
import PuzzleWidget from './components/puzzle-widget.component/index.vue'
import TextsWidget from './components/texts-widget.component/index.vue'
import UsersWidget from './components/users-widget.component/index.vue'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginationConfig } from '@/app/Core/Infrastructure/PaginationConfig'

@Component({
  components: {
    MessageComponent,
    CardsWidget,
    AssetsWidget,
    PuzzleWidget,
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
        const existingFilter = this.filters.filter.filter(i => i.field === prop)[0]
        if (existingFilter) {
          existingFilter.value = filters[prop]
        } else {
          this.filters.filter.push({ field: prop, value: filters[prop], operator: 'like' })
        }
      } else {
        this.filters.filter = this.filters.filter.filter(item => item.field !== prop)
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
