import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import { permissions } from '@/permissions/permission.type'
import Modal from './modal.component/index.vue'

export class TranslateForm {
  title: string;
  origtext: string;
  translate: string;
}

@Component({
  components: {
    Modal,
  },
})
export default class TranslatesModule extends Vue {
  @Inject()
  private readonly service: TextService

  public loading: boolean = false
  public form: TranslateForm = {
    title: '',
    origtext: '',
    translate: '',
  }

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
    this.texts = await this.service.all();
  }

  async remove(row: any): Promise<void> {
    await this.service.removeText(row)
    await this.load();
  }

  public async edit(row: any): Promise<void> {
    await this.$router.push({
      name: 'textedit',
      params: { id: row.id }
    })
  }

  public async add(): Promise<void> {
    await this.service.create(this.form);
    this.$buefy.snackbar.open(this.$tc('loaded'))
    await this.load()
    this.closeSettingsModal()
  }

  public async setVisibility(item: any): Promise<void> {
    if (item.published) {
      await this.service.unPublishText(item)
    } else {
      await this.service.publishText(item)
    }

    await this.load()
  }

  public showSettingsModal(): void {
    this.isComponentModalActive = true
  }

  public closeSettingsModal(): void {
    this.isComponentModalActive = false
  }

  public close(): void {

  }

  async mounted(): Promise<void> {
    await this.load()
  }
}
