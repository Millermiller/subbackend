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
  private passingService: PassingService

  private loading: boolean = false
  private isComponentModalActive: boolean = false
  private passings: Passing[] = []
  private edited: PassingForm = {
    id: null,
    errors: [],
    percent: null,
    completed: null,
  }
  permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.passings = await this.passingService.getAll()
    this.loading = false
  }

  edit(passing: Passing) {
    this.edited = passing.toDTO()
    this.showCreateModal()
  }

  async save() {
    if (this.edited.id) {
      await this.passingService.update(this.edited.id, this.edited)
    } else {
      await this.passingService.create(this.edited)
    }
    await this.load()
    this.closeCreateModal()
  }

  async remove(row: Passing) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.passingService.destroy(row)
        this.$buefy.snackbar.open(this.$tc('passingRemoved'))
        await this.load()
      },
    })
  }

  showCreateModal() {
    this.isComponentModalActive = true
  }

  closeCreateModal() {
    this.edited = {
      id: null,
      errors: [],
      percent: null,
      completed: null,
    };
    this.isComponentModalActive = false
  }

  tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }
}
