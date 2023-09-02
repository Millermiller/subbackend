import Vue from 'vue'
import { Entity } from '@/app/Core/Domain/Contract/Entity'
import { BaseService } from '@/app/Core/Application/base.service'
import { permissions } from '@/permissions/permission.type'
import Component from 'vue-class-component'
import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import { FiltersData } from '@/app/Core/Application/FiltersData'
import { PaginatedResponse } from '@/app/Core/Infrastructure/PaginatedResponse'
import { PaginationConfig } from '@/app/Core/Infrastructure/PaginationConfig'
import Language from '@/app/Languages/Domain/Language'
import { store } from '@/app/Core/Infrastructure/store'
import { Watch } from 'vue-property-decorator'

// @ts-ignore
@Component
export abstract class CRUDComponent<T extends Entity, D extends EntityForm<T>> extends Vue {
  protected abstract service: BaseService<T>
  protected abstract buildForm(): D

  public loading: boolean = false
  public loadingModal: boolean = false
  protected entities: T[] = []
  protected edited: D = null
  protected formErrors: D = null
  public permissions: {} = {}
  public isModalFormActive: boolean = false
  public modalTitle: string = ''
  protected modalTitleCreate: string = ''
  protected modalTitleUpdate: string = ''
  public config: PaginationConfig = new PaginationConfig()
  protected filters: FiltersData = new FiltersData()
  public page: number = 1
  protected watchLanguage: boolean = false

  get tableProperties() {
    return {
      paginated: true,
      narrowed: true,
      hoverable: true,
      loading: this.loading,
      total: this.config.total,
      'backend-filtering': true,
      'backend-sorting': true,
      'sort-multiple': true,
      'backend-pagination': true,
      'debounce-search': 500,
      'sort-multiple-data': this.filters.sort,
      'per-page': this.config.per_page,
    }
  }

  get tableEvents() {
    return {
      'page-change': this.onPageChange,
      'filters-change': this.onFiltersChange,
      sort: this.onSort,
      'sorting-priority-removed': this.sortingPriorityRemoved
    }
  }

  constructor() {
    super()
    this.permissions = permissions;
    this.edited = this.buildForm()
  }

  async mounted(): Promise<void> {
    this.filters.page = this.page
    this.filters.pageSize = this.config.per_page
    // console.log(this.filters)
    if (this.watchLanguage === true) {
      if (this.language.id !== undefined) {
        await this.load()
      }
    } else {
      await this.load()
    }
  }
  get language(): Language {
    return store.getters.language
  }

  @Watch('language')
  private async onLanguageChange(language: Language, oldLanguage: Language): Promise<void> {
    if (this.watchLanguage === true) {
      await this.load()
    }
  }

  protected async load(): Promise<void> {
    this.loading = true
    // console.log(this.filters)
    const paginatedData: PaginatedResponse<T> = await this.service.get(this.filters)
    this.entities = paginatedData.data
    this.config = paginatedData.meta.pagination
    // const str = JSON.stringify(this.filters)
    // eslint-disable-next-line no-restricted-globals
    // history.pushState({}, null, `${this.$route.path}?filter=${str}`)
    this.loading = false
  }

  public edit(entity: T): void {
    this.edited = entity.toDTO()
    this.modalTitle = this.modalTitleUpdate
    this.showModalForm()
  }

  public async save(): Promise<void> {
    this.loadingModal = true
    try {
      if (this.edited.id) {
        const entity = this.edited.fromDTO()
        console.log(this.edited)
        console.log(entity)
        await this.service.update(entity, this.edited)
        this.$buefy.snackbar.open(this.$tc('updated'))
      } else {
        await this.service.create(this.edited)
        this.$buefy.snackbar.open(this.$tc('created'))
      }
      await this.load()
      this.closeModalForm()
      this.loadingModal = false
    } catch (data) {
      this.formErrors = data.errors
      // this.$buefy.snackbar.open(error) // its already displayed
      this.loadingModal = false
    }
  }

  public async remove(entity: T): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        this.loading = true
        await this.service.destroy(entity)
        await this.load()
        this.$buefy.snackbar.open(this.$tc('deleted'))
      },
    })
  }

  public showModalForm(): void {
    if (this.modalTitle === '') {
      this.modalTitle = this.modalTitleCreate
    }
    this.isModalFormActive = false
    this.isModalFormActive = true
  }

  public closeModalForm(): void {
    this.isModalFormActive = false
    this.modalTitle = ''
    this.edited = this.buildForm()
  }

  async onPageChange(page: number) {
    this.page = page
    this.filters.page = this.page
    await this.load()
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
    await this.load()
  }

  async sortingPriorityRemoved(field: string) {
    this.filters.sort = this.filters.sort.filter(
      priority => priority.field !== field
    )
    await this.load()
  }

  async onSort(field: string, order: string, event: any) {
    const existingPriority = this.filters.sort.filter(i => i.field === field)[0]
    if (existingPriority) {
      existingPriority.order = existingPriority.order === 'desc' ? 'asc' : 'desc'
    } else {
      this.filters.sort.push({ field, order })
    }

    await this.load()
  }

  public reset() {
    this.filters = new FiltersData()
  }

  async reload(): Promise<void> {
    console.log('reload')
    await this.load()
  }
}
