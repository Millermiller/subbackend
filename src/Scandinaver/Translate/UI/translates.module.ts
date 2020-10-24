import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
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
  private service: TextService

  private loading: boolean = false
  private form: TranslateForm = {
    title: '',
    origtext: '',
    translate: '',
  }

  private texts: Translate[] = []
  private isComponentModalActive: boolean = false

  icon(row: any) {
    return row.published ? 'eye' : 'eye-off'
  }

  async load() {
    this.texts = await this.service.all();
  }

  async remove(row: any) {
    await this.service.removeText(row)
    await this.load();
  }

  edit(row: any) {
    this.$router.push({ name: 'textedit', params: { id: row.id } })
  }

  async add() {
    await this.service.create(this.form);
    this.$buefy.snackbar.open('Загружено')
    await this.load()
    this.closeSettingsModal()
  }

  async setVisibility(item: any) {
    if (item.published) {
      await this.service.unPublishText(item)
    } else {
      await this.service.publishText(item)
    }

    await this.load()
  }

  showSettingsModal() {
    this.isComponentModalActive = true
  }

  closeSettingsModal() {
    this.isComponentModalActive = false
  }

  close() {

  }

  mounted() {
    this.load()
  }
}
