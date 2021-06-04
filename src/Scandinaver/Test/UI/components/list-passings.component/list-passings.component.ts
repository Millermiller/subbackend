import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import PassingService from '@/Scandinaver/Test/Application/passing.service'
import Passing from '@/Scandinaver/Test/Domain/Passing'
import { permissions } from '@/permissions/permission.type'
import PassingForm from '@/Scandinaver/Test/Domain/PassingForm'

@Component({
  components: {},
})
export default class ListPassingsComponent extends Vue {
  @Inject()
  private readonly passingService: PassingService

  public loading: boolean = false
  public isComponentModalActive: boolean = false
  public passings: Passing[] = []
  public edited: PassingForm = {
    id: null,
    errors: [],
    percent: 0,
    completed: false,
  }
  public permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.passings = await this.passingService.getAll()
    this.loading = false
  }

  public edit(passing: Passing): void {
    this.edited = passing.toDTO()
    this.showCreateModal()
  }

  public async save(): Promise<void> {
    if (this.edited.id) {
      const passing = Passing.fromDTO(this.edited)
      await this.passingService.update(passing, this.edited)
    } else {
      await this.passingService.create(this.edited)
    }
    await this.load()
    this.closeCreateModal()
  }

  public async remove(row: Passing): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.passingService.destroy(row)
        this.$buefy.snackbar.open(this.$tc('passingRemoved'))
        await this.load()
      },
    })
  }

  public showCreateModal(): void {
    this.isComponentModalActive = true
  }

  public closeCreateModal(): void {
    this.edited = {
      id: null,
      errors: [],
      percent: 0,
      completed: false,
    };
    this.isComponentModalActive = false
  }

  public tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }
}
