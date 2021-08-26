import Vue from 'vue'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { permissions } from '@/permissions/permission.type'
import Component from 'vue-class-component'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

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

  constructor() {
    super()
    this.permissions = permissions;
    this.edited = this.buildForm()
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  protected async load(): Promise<void> {
    this.loading = true
    this.entities = await this.service.getAll()
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
      this.entities = await this.service.getAll()
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
}
