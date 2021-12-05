import Vue from 'vue'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { permissions } from '@/permissions/permission.type'
import Component from 'vue-class-component'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'
import { PaginationConfig } from '@/Scandinaver/Core/Infrastructure/PaginationConfig'

// @ts-ignore
@Component
export abstract class CRUDComponent<T extends Entity, D extends EntityForm> extends Vue {
  protected abstract service: BaseService<T>
  protected abstract buildForm(): D

  public loading: boolean = false
  public loadingModal: boolean = false
  protected entities: T[] = []
  protected edited: D = null
  public permissions: {} = {}
  public isModalFormActive: boolean = false
  public modalTitle: string = ''
  protected modalTitleCreate: string = ''
  protected modalTitleUpdate: string = ''
  public config: PaginationConfig = new PaginationConfig()
  protected filters: FiltersData = new FiltersData()
  public page: number = 1

  constructor() {
    super()
    this.permissions = permissions;
    this.edited = this.buildForm()
  }

  async mounted(): Promise<void> {
    this.filters.page = this.page
    this.filters.pageSize = this.config.per_page
    await this.load()
  }

  protected async load(): Promise<void> {
    this.loading = true
    const paginatedData: PaginatedResponse<T> = await this.service.getAll(this.filters)
    this.entities = paginatedData.data
    this.config = paginatedData.meta.pagination
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
        const entity = this.service.fromDTO(this.edited)
        await this.service.update(entity, this.edited)
        this.$buefy.snackbar.open(this.$tc('updated'))
      } else {
        await this.service.create(this.edited)
        this.$buefy.snackbar.open(this.$tc('created'))
      }
      this.entities = await this.service.getAll(new FiltersData())
      this.closeModalForm()
      this.loadingModal = false
    } catch (error) {
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
}
