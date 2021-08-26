import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { permissions } from '@/permissions/permission.type'
import { TranslateForm } from '@/Scandinaver/Translate/Domain/TranslateForm'

@Component({})
export default class ListTextsComponent extends Vue {
  @Inject()
  private readonly service: TextService

  public loading: boolean = false
  public form: TranslateForm = new TranslateForm()

  public texts: Translate[] = []
  public isComponentModalActive: boolean = false
  public permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  public icon(row: any): string {
    return row.published ? 'eye' : 'eye-off'
  }

  private async load(): Promise<void> {
    this.loading = true
    this.texts = await this.service.getAll();
    this.loading = false
  }

  async remove(row: any): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.service.destroy(row)
        await this.load();
      },
    })
  }

  public async edit(translate: Translate): Promise<void> {
    await this.$router.push({
      name: 'edit-text',
      params: { id: translate.getId().toString() }
    })
  }

  public async add(): Promise<void> {
    this.loading = true
    try {
      await this.service.create(this.form);
      this.$buefy.snackbar.open(this.$tc('loaded'))
      await this.load()
    } catch (e) {
      //
    } finally {
      this.loading = false
      this.closeCreateFormModal()
    }
  }

  public async setVisibility(item: Translate): Promise<void> {
    this.loading = true
    if (item.isPublished()) {
      await this.service.unPublishText(item)
    } else {
      await this.service.publishText(item)
    }

    await this.load()
  }

  public showCreateFormModal(): void {
    this.isComponentModalActive = true
  }

  public closeCreateFormModal(): void {
    this.isComponentModalActive = false
    this.form = new TranslateForm()
  }

  public tagClass(published: boolean): string {
    return published ? 'is-info' : 'is-danger'
  }

  public close(): void {

  }

  async mounted(): Promise<void> {
    await this.load()
  }
}
