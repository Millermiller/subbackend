import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { permissions } from '@/permissions/permission.type'
import { TranslateForm } from '@/Scandinaver/Translate/Domain/TranslateForm'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'

@Component({})
export default class ListTextsComponent extends CRUDComponent<Translate, TranslateForm> {
  @Inject()
  protected readonly service: TextService

  public loading: boolean = false
  public form: TranslateForm = new TranslateForm()

  public texts: Translate[] = []
  public isComponentModalActive: boolean = false
  public permissions: {}
  protected watchLanguage = true

  constructor() {
    super();
    this.permissions = permissions;
  }

  public buildForm(): TranslateForm {
    return new TranslateForm()
  }

  public icon(row: any): string {
    return row.published ? 'eye' : 'eye-off'
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
}
